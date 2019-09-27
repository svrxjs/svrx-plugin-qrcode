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

![image](https://user-images.githubusercontent.com/731333/65737221-66af4680-e110-11e9-9f84-b0745a6b9382.png)


- `cli`: whether to display command line qrcode, default `true`
- `ui`: whether to display browser ui qrcode, default `true`
- `console`: whether to display browser console qrcode, default `false`. 
