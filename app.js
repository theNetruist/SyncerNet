'use strict';
const electron = require('electron');
const path = require('path');
const { app } = electron;
const { BrowserWindow } = electron;
let win;

function createMainWindow() {
    win = new BrowserWindow({
        acceptFirstMouse: true,
        //frame: false
    });
    win.loadURL('file://' + path.resolve('app.html'));

    win.webContents.openDevTools();
}

app.makeSingleInstance(function () {
    console.log('Second window opening attempted.');
});

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createMainWindow();
    }
});