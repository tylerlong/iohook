# iohook

This version is heavily modified by [Tyler Liu](https://github.com/tylerlong). 
It is not meant to be used by public because it is not a generic project:

- It doesn't support Linux
- It only supports the latest Electron version.
  - It might work with old versions of Electron but it's not tested.
  - It doesn't work in Node.js
- It only supports x64

You may want to use the original project directly instead of using this project.


## What is the purpose?

The original iohook project doesn't support webpack very well. Especially, you need to add this library to externals, otherwise it cannot find some *.node file.

So I want to simplify the project by limiting what it supports to make it work better with webpack.


## How to build the latest prebuilt

Git clone official iohook.

```
npm install
```

### macOS

```
node build.js --runtime electron --version 15.0.0 --abi 98 --upload=false
```

Built files are in `./build/Release` folder, they are

- iohook.node
- uiohook.dylib

### windows

Install VS Studio 2019 with C++ desktop development kit.

```
node build.js --runtime electron --version 15.0.0 --abi 98 --upload=false --msvs_version=2019
```

Built files are in `./build/Release` folder, they are

- iohook.node
- uiohook.dll
