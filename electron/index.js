import {app, BrowserWindow} from 'electron';
import serve from 'electron-serve';

const loadURL = serve({directory: 'build'});
let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow({
        width: 800, height: 700,
        autoHideMenuBar: true,
        show: false,
        icon: 'static/icon@2x.png'
    });

	await loadURL(mainWindow);
    mainWindow.on('ready-to-show',mainWindow.show);
})();
