const { app, BrowserWindow } = require('electron')


app.on('ready', function() {
    // Create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 })

    // and load the index.html of the app.
    win.loadURL('file://' + __dirname + '/index.html');

    // Emitted when the window is closed.
    win.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });

    // OR
    /* win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //Need to define "path" and "url" in that case
    const path = require('path')
    const url = require('url')
*/

});
