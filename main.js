const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const AutoLaunch = require('auto-launch');

let tray = null;
let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 150,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
  mainWindow.on('close', (event) => {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.setAlwaysOnTop(true, 'screen');
}

function createSettingsWindow() {
  const settingsWindow = new BrowserWindow({
    width: 400,
    height: 300,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  settingsWindow.loadFile(path.join(__dirname, 'src/settings.html'));
  settingsWindow.on('close', (event) => {
    event.preventDefault();
    settingsWindow.hide();
  });
  console.log('🛠 Opening settings window');
}

app.whenReady().then(() => {
  createWindow();

  tray = new Tray(path.join(__dirname, 'chopper.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show Widget', click: () => mainWindow.show() },
    { label: 'Settings', click: createSettingsWindow },
    { label: 'Quit', click: () => app.quit() }
  ]);
  tray.setToolTip('Copy Widget');
  tray.setContextMenu(contextMenu);
  tray.on('double-click', () => {
    if (mainWindow) {
      mainWindow.show();
    }
  });

  const widgetAutoLauncher = new AutoLaunch({
    name: 'Copy Widget'
  });
  widgetAutoLauncher.enable();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('save-settings', (event, updated) => {
  const settingsPath = path.join(__dirname, 'settings.json');
  fs.writeFileSync(settingsPath, JSON.stringify(updated, null, 2));

  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});