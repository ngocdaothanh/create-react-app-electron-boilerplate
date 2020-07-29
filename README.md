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
