# Minimum Electron boilerplate based on create-react-app

Reference:
* [From React to an Electron app ready for production](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
* [Building an Electron application with create-react-app](https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/)
* [basic-electron-react-boilerplate](https://github.com/Spooky12/basic-electron-react-boilerplate)

## Directory structure

* `electron/`: Electron (Node) source code
* `public/`: React web public files
* `src/`: React source code
* `rollup.config.js`: For [bundling](https://rollupjs.org/) source code in `electron/` to [public/electron.js](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)

## Running the app in dev mode

```bash
npm start
```

## Package the app

Bundle all source code files in `electron` directory to
[public/electron.js](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3):

```bash
npm run electron-bundle
```

Build the React app to `build` directory:

```bash
npm run react-build
```

Package the Electron app:

```bash
npm run electron-pack
```

The packaged application will be in the `dist` directory.

See the documentation of [electron-builder](https://www.electron.build/) and
the `build` part of `package.json`.

## Include files in the packaged app

Put them in the `extraResources` directory.

Once packaged, the files can be found in the `resources/extraResources` directory
of the packaged application (`Contents/Resources/extraResources`
[for MacOS](https://www.electron.build/configuration/contents#extraresources)).

To access this folder in your app you can do:

```javascript
const isDev = window.require('electron-is-dev')
const pathAppResources = `${isDev ? '.' : window.process.resourcesPath}/extraResources/`
```
