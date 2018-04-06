require('electron').ipcRenderer.on('loaded' , function(event, data) {
  document.getElementById('title').innerHTML = data.appName + ' App';
});


//Open a folder
const {ipcRenderer} = require('electron')

const addFileBtn = document.getElementById('addFile')

addFileBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-directory', (event, path) => {
  document.getElementById('fileSelection').innerHTML = `You selected: ${path}`
})
