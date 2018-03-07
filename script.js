const shell = require('electron').shell

const os = require('os')

const fileManagerBtn = document.getElementById('file_manager')

fileManagerBtn.addEventListener('click', function (event) {
  shell.showItemInFolder(os.homedir())
})
