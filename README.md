# svrx-plugin-qrcode

[![Greenkeeper badge](https://badges.greenkeeper.io/x-orpheus/svrx-plugin-qrcode.svg)](https://greenkeeper.io/)

qrcode plugin for [svrx](https://github.com/x-orpheus/svrx)

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**

## Usage

### cli

```sh
svrx --qrcode
```

### manual

```js
const svrx = require('svrx');

svrx({ plugins: ['qrcode'] }).start();
```

## Options

- cli: whether to display command line qrcode, default `true`
- ui: whether to display browser ui qrcode, default `true`
- console: whether to display browser console qrcode, default `false`
