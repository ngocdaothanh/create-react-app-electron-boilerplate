// Bundle source code in "electron" directory to one file at "public/electron.js".
// See: https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3

// Avoid the app to be reverse engineered
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'electron/main.js',
  output: [
    {
      file: 'public/electron.js',
      format: 'cjs',
      sourcemap: false,  // https://github.com/ngocdaothanh/create-react-app-electron-boilerplate/issues/1
      plugins: [terser()]
    }
  ]
}
