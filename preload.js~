// imports the contextBridge module from Electron
const { contextBridge, ipcRenderer } = require('electron')

// allows you to expose specific functionality to the renderer process
// in this case, exposing an object with the name 'versions'
contextBridge.exposeInMainWorld('versions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	ping: () => ipcRenderer.invoke('ping')
	// we can also expose variables, not just functions
})
