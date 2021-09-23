# iohook

This version is heavily modified by [Tyler Liu](https://github.com/tylerlong). 
It is not meant to be used by public because it is not a generic project:

- It doesn't support Linux
- It only supports the latest Electron version.
  - It might work with old versions but it's not tested.
- It only supports x64


## What is the purpose?

The original iohook project doesn't support webpack very well. Especially, you need to add this library to externals, otherwise it cannot find some *.node file.

So I want to simplify the project by limiting what it supports to make it work better with webpack.
