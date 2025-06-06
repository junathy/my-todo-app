// import two Electron modules with CommonJS module syntax
const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

// loads web page into a new BrowserWindow instance
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	win.loadFile('index.html')
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
