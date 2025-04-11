import path from 'path';
import {spawnSync} from 'child_process';

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
    if (obj.hasOwnProperty('nCommit')) {
      args.push(`-${obj.nCommit}`);
    }

    if (obj.hasOwnProperty('logFormat')) {
      logFormat = obj.logFormat;
    }

    if (obj.hasOwnProperty('repoDir')) {
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
    if (obj.hasOwnProperty('fileList')) {
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
