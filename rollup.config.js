// Bundle source code in "electron" directory to one file at "public/electron.js".
// See: https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3

// Convert `require(...)` to `import '...'`, so they can be included the output file
import commonjs from '@rollup/plugin-commonjs'

// Avoid the app to be reverse engineered
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'electron/main.js',
  plugins: [commonjs()],
  output: [
    {
      file: 'build/electron.js',
      format: 'cjs',
      sourcemap: false,
      plugins: [terser()]
    }
  ]
}
