# svrx-plugin-qrcode

svrx plugin for qrcode

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**

### Via CLI

```sh
svrx --qrcode
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: ['qrcode'] }).start();
```

## Options

![](https://p1.music.126.net/WvU4RrWkSQRRfyE4nDkN6A==/109951164388330260.png)

- `cli`: whether to display command line qrcode, default `true`
- `ui`: whether to display browser ui qrcode, default `true`
- `console`: whether to display browser console qrcode, default `false`. 
