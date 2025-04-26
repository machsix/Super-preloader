/* eslint-disable no-unused-vars */
/*global console*/
import {exec} from 'child_process';
import {mkdir, writeFile, access} from 'fs/promises';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {promisify} from 'util';

const execAsync = promisify(exec);

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldDir = join(__dirname, 'old');

/**
 * Ensures that the specified directory exists, creating it if necessary.
 * @param {string} path - The path to the directory to ensure.
 */
async function ensureDir(path) {
  try {
    await access(path);
  } catch {
    await mkdir(path, {recursive: true});
  }
}

/**
 * Retrieves the commit hashes for changes to the package.json file.
 * @returns {Promise<string[]>} A promise that resolves to an array of commit hashes, ordered from oldest to newest.
 */
async function getPackageJsonCommits() {
  const {stdout} = await execAsync('git log --follow --format=%H -- package.json');
  return stdout.trim().split('\n').reverse(); // oldest to newest
}

/**
 * Extracts version information from a list of commit hashes.
 * @param {string[]} commits - An array of commit hashes to process.
 * @returns {Promise<{commit: string, version: string}[]>} A promise that resolves to an array of objects containing commit hashes and their corresponding versions.
 */
async function getVersionCommits(commits) {
  const versions = [];
  let prevVersion = null;

  for (const commit of commits) {
    try {
      const {stdout} = await execAsync(`git show ${commit}:package.json`);
      const pkg = JSON.parse(stdout);
      const version = pkg.version;
      if (version && version !== prevVersion) {
        versions.push({commit, version});
        prevVersion = version;
      }
    } catch (err) {
      console.warn(`⚠ Skipping ${commit}: ${err.message}`);
    }
  }

  return versions;
}

/**
 *
 * @param {{commit: string, version: string}[]} versionCommits - An array of objects containing commit hashes and their corresponding versions.
 */
async function extractUserScripts(versionCommits) {
  for (const {commit, version} of versionCommits) {
    try {
      const {stdout} = await execAsync(`git show ${commit}:dist/Super_preloaderPlus_one_New.user.js`);
      const targetFile = join(oldDir, `${version}.user.js`);
      const replacedContent = stdout.replace(/^\/\/\s*@require.*$/m, '// @require      https://cdn.jsdelivr.net/gh/machsix/gm4-polyfill@2.0/gm4-polyfill-mach6-legacy.js');
      try {
        await access(targetFile); // Check if file exists
        console.log(`⏩ Skipped ${version}.user.js (already exists)`);
        continue; // Skip to next version
      } catch {
        // File does not exist, proceed to write
        await writeFile(targetFile, replacedContent, 'utf-8');
        console.log(`✔ Saved ${version}.user.js`);
      }
      console.log(`✔ Saved ${version}.user.js`);
    } catch (err) {
      console.warn(`⚠ File not found in ${commit} for version ${version}`);
    }
  }
}

/**
 * Writes a JSON file mapping versions to their corresponding commit hashes and links.
 * @param {{commit: string, version: string}[]} versionCommits - An array of objects containing commit hashes and their corresponding versions.
 */
async function writeVersionMap(versionCommits) {
  const versionMap = {};

  for (const {version, commit} of versionCommits) {
    versionMap[version] = {
      commit,
      link: `https://github.com/machsix/Super-preloader/commit/${commit}`
    };
  }

  const outputPath = join(__dirname, 'versions.json');
  await writeFile(outputPath, JSON.stringify(versionMap, null, 2), 'utf-8');
  console.log(`📄 Wrote version map to versions.json`);
}

/**
 *
 */
async function main() {
  await ensureDir(oldDir);
  const commits = await getPackageJsonCommits();
  const versionCommits = await getVersionCommits(commits);
  await extractUserScripts(versionCommits);
  await writeVersionMap(versionCommits);
  console.log('✅ Done.');
}

main().catch(console.error);
