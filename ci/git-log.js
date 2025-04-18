import path from 'path';
import {spawnSync} from 'child_process';

/**
 * Generates a JSON representation of the git log for a repository.
 * @param {object} obj - Configuration object for the git log.
 * @param {string} [repoDir] - The directory of the git repository.
 * @param {string} [magicKey] - A unique string used to split log entries.
 * @returns {object[]} - An array of commit information objects.
 */
export default function (obj, repoDir, magicKey) {
  const args = ['log'];
  magicKey = magicKey || '^^';
  repoDir = repoDir || './';

  let logFormat = {
    commit: '%H',
    abbreviated_commit: '%h',
    date: '%cD',
    committer: '%cn',
    author_date: '%aD',
    author: '%an'
  };

  if (obj) {
    if (Object.prototype.hasOwnProperty.call(obj, 'nCommit')) {
      args.push(`-${obj.nCommit}`);
    }

    if (Object.prototype.hasOwnProperty.call(obj, 'logFormat')) {
      logFormat = obj.logFormat;
    }

    if (Object.prototype.hasOwnProperty.call(obj, 'repoDir')) {
      repoDir = obj.repoDir;
    }
  }
  let strLogFormat = '{%n';
  for (const prop in logFormat) {
    if (typeof logFormat[prop] === 'string') {
      strLogFormat += `  "${prop}": "${logFormat[prop]}",%n`;
    }
  }
  strLogFormat = strLogFormat.slice(0, strLogFormat.length - 3) + `%n}${magicKey}`;
  // default: --pretty=format:{%n  "commit": "%H",%n  "abbreviated_commit": "%h",%n  "date": "%cD",%n  "committer": "%cn",%n  "author_date": "%aD",%n  "author": "%an"%n}^^

  args.push(`--pretty=format:${strLogFormat}`);

  args.push('HEAD');
  if (obj) {
    if (Object.prototype.hasOwnProperty.call(obj, 'fileList')) {
      args.push('--');
      obj.fileList.forEach((x) => {
        args.push(x);
      });
    }
  }
  const out = spawnSync('git', args, {
    cwd: path.resolve(process.cwd(), repoDir),
    encoding: 'utf8'
  });
  const commitInfoArray = out.stdout.split(magicKey).filter((val) => val.length > 0);
  let commitInfo = '[\n';
  commitInfoArray.forEach((val, i) => {
    if (i < commitInfoArray.length - 1) {
      commitInfo += `${val},`;
    } else {
      commitInfo += `${val}\n]`;
    }
  });
  return JSON.parse(commitInfo);
}
