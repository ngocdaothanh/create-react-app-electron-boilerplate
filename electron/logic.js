const {ipcMain} = require('electron')

function initLogic() {
  ipcMain.on('whereami', (event) => {
    event.returnValue = {__dirname, cwd: process.cwd()}
  })
}

module.exports = {
  initLogic
}
