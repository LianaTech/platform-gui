var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'PlatformGui.app', 'Contents', 'MacOS', 'PlatformGui');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'PlatformGui');
      default:
        throw 'Unsupported platform';
    }
  }
};
