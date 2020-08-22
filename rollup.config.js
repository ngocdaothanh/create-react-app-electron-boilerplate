// Bundle files in `electron` directory to one file `build/electron.js`

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
