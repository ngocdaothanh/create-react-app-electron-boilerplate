import React from 'react'

const {ipcRenderer} = window.electron

const App = () => {
  const whereami = ipcRenderer.sendSync('whereami')

  return (
    <>
      <h1>Welcome to React on Electron</h1>
      <pre><code>whereami: {JSON.stringify(whereami, null, 2)}</code></pre>
    </>
  )
}

export default App
