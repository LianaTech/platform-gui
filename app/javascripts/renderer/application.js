require('electron').ipcRenderer.on('loaded' , function(event, data) {
  document.getElementById('title').innerHTML = data.appName + ' App';
});
