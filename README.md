# Minimum Electron boilerplate based on create-react-app

Based on:
* https://github.com/Spooky12/basic-electron-react-boilerplate
* https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/

## Running the app in dev mode

```bash
npm start
```

## Package the app

Build the React app:

```bash
npm run build
```

- To package the React app:

```bash
npm run electron-pack
```

The packaged application will be in the `dist` directory.

Note: I only tested on Windows, so you might need to check the documentation of [electron-builder](https://www.electron.build/) and edit the `build` part of `package.json` is you want to build for other platforms.

- To only get the unpacked version of the App, you can run:

```bash
npm run electron-dist
```

## Including files in the packaged app

If you want to include files in the packaged application, you have to put them in the `extraResources` directory. Once packaged, the files can be found in the `resources/extraResources` directory of the packaged application (`Contents/Resources/extraResources` [for MacOS](https://www.electron.build/configuration/contents#extraresources)).

To access this folder in your app you can do:

```javascript
const isDev = window.require('electron-is-dev')
const pathAppResources = `${isDev ? '.' : window.process.resourcesPath}/extraResources/`
```