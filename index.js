
const qrcode = require('qrcode');
const libPath = require('path');
const libFs = require('fs');

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
            default: true,
            description: 'whether to display browser console qrcode'
        },
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
                if(config.get('cli')){
                    io.call('qrcode.get', {content: config.get('$.urls.external')}).then((urlTerminal)=>{
                        logger.notify( 'generated qrcode for external urls \n' + urlTerminal)
                    })
                }
            })
        }
    }
};
