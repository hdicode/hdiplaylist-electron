const BrowserWindow = require('electron').remote.BrowserWindow
const newWindowBtn = document.getElementById('frameless-window')

const path = require('path')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 200, height:200, titleBarStyle: 'hidden' })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})