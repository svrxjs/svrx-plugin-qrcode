
const qrcode = require('qrcode');
const libPath = require('path');
const libFs = require('fs');

module.exports = {

    configSchema: {

        ui: {
            type: 'boolean',
            default: true
        }
    },

    services: {
        // io.call('markdown.test).then(content=> content)
        async ['qrcode.get']({content, type='terminal'}) {
            return qrcode.toString(content, { type })
        }
    },
    assets: {
        'script': [
            './assets/index.js'
        ],
        'style':[
            './assets/index.css'
        ]
    },
    hooks: {
        async onCreate( { events, config, io, logger }) {
            events.on('ready', ()=>{
                io.call('qrcode.get', {content: config.get('$.urls.external')}).then((urlTerminal)=>{
                    logger.notify( 'generated qrcode for external urls \n' + urlTerminal)
                })
            })
        }
    }
};
