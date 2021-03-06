const { version, openFile } = require('./util');

module.exports = {
  getChangelog(v = version) {
    const changelog = openFile('CHANGELOG.md');
    const [_, olderLogs] = changelog.split(`\n# ${v}`);
    const logs = olderLogs.split('\n# ')[0];
    return logs.slice(logs.indexOf('\n##') + 1);
  }
};
