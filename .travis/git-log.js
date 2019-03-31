const { execSync } = require('child_process');

function gitLog(cwd, obj, magicKey) {
    magicKey = '^^'||magicKey;
    cwd = '.'||cwd;

    let logFormat = {
        commit: "%H",
        abbreviated_commit: "%h",
        date: "%cD",
        committer: "%cn",
        author_date: "%aD",
        author: "%an"
    };
    let nCommit = "";
    let fileList = "";

    if (obj) {
        if (obj.hasOwnProperty('logFormat')) {
            logFormat = obj.logFormat;
        }
        if (obj.hasOwnProperty('nCommit')) {
            nCommit = `-n ${obj.nCommit}`;
        }
        if (obj.hasOwnProperty('fileList')) {
            const fileList = " " + obj.fileList.join(" ");
        }
    }

    let strLogFormat = '{%n';
    for (const prop in logFormat) {
        strLogFormat += `  \\"${prop}\\": \\"${logFormat[prop]}\\",%n`;
    }
    strLogFormat = strLogFormat.slice(0, strLogFormat.length-3) + `%n}${magicKey}`;

    const cmd = `git log ${nCommit} --pretty=format:"${strLogFormat}"${fileList}`
    let stdout = execSync(cmd, {cwd: cwd, encoding: "utf8"});
    commitInfoArray = stdout.split(magicKey).filter((val) => val.length > 0);

    let commitInfo = '[\n';
    commitInfoArray.forEach((val,i) => {
        if (i < commitInfoArray.length-1) {
            commitInfo += `${val},`;
        } else {
            commitInfo += `${val}\n]`;
        }
    })

    return JSON.parse(commitInfo);
}

module.exports = {
    gitLog: gitLog
}