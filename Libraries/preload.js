const {
    contextBridge,
    ipcRenderer
} = require("electron");

const validChannels = [
    "quit",
    "closeFocusedWindow",
    "closeAllWindows",
    "closeWindow",
    "showWindow",
    "showAll",
    "minimize",
    "minimizeAll",
    "maximize",
    "maximizeAll",
    "showSetup",
    "showLiveMatch",
    "authenticate",
    "showLiveMatchData",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test"
];
window.onload = () => {
    // Expose protected methods that allow the renderer process to use
    // the ipcRenderer without exposing the entire object
    contextBridge.exposeInMainWorld("API", {
            //IPC renderer functionality
            receive: (channel, func) => { 
                if(validChannels.includes(channel)) {
                    ipcRenderer.on(channel, (event, ...args) => func(...args));
                }
            },
            send: (channel, data) => {
                if(validChannels.includes(channel)) {
                    ipcRenderer.send(channel, data);
                }
            }
        }
    );
}
