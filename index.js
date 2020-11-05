const electron = require("electron");

function CreateWindow() {
  const app = new electron.BrowserWindow({
      width: 1000,
      height: 600,
      webPreferences: {
          nodeIntegration: true,
      }
  });

  app.loadFile("index.html");
}

electron.app.whenReady().then(CreateWindow);

electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron.app.quit();
    }
  })
  
  electron.app.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows.length === 0) {
      createWindow()
    }
  })