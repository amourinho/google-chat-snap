#! /usr/bin/env node
const { app, BrowserWindow } = require('electron');

var path = require('path');

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, 'assets/icons/chatlogo-64.png'),
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });

  mainWindow.webContents.setAudioMuted(false);
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL('https://chat.google.com/');
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  app.quit();
});
app.on('activate', function () {
  if (mainWindow === null) createWindow()
});
