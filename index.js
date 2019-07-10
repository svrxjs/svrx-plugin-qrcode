const qrcode = require('qrcode');
const libUrl = require('url');

module.exports = {
  configSchema: {
    cli: {
      type: 'boolean',
      default: true,
      description: 'whether to display command line qrcode'
    },
    ui: {
      type: 'boolean',
      default: true,
      description: 'whether to display browser ui qrcode'
    },
    console: {
      type: 'boolean',
      default: false,
      description: 'whether to display browser console qrcode'
    }
  },

  services: {},
  assets: {
    script: ['./assets/index.js'],
    style: ['./assets/index.css']
  },
  hooks: {
    async onCreate({ events, config, io, logger }) {
      const MODE_MAPPING = {
        string: 'toString',
        base64: 'toDataURL'
      };
      io.registService(
        'qrcode.get',
        async ({ content, url ,mode = 'string', type = 'terminal' }) => {
          let qrContent = url
            ? libUrl.resolve(config.get('$.urls.external'), url)
            : content;
          return qrcode[MODE_MAPPING[mode]](qrContent, { type });
        }
      );
      events.on('ready', () => {
        if (config.get('cli')) {
          io.call('qrcode.get', {
            content: config.get('$.urls.external')
          }).then(urlTerminal => {
            logger.notify(
              'generated qrcode for external urls \n' + urlTerminal
            );
          });
        }
      });
    }
  }
};
