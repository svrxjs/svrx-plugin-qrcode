

var io = svrx.io;
var config = svrx.config;

config.get().then(config=>{
    if(config.console){
        io.call( 'qrcode.get', {content: location.href}).then(urlData=>{
            console.log(urlData)
        })
    }
    if(config.ui){
        io.call( 'qrcode.get', {content: location.href, type:'svg'}).then(urlData=>{
            const container = document.createElement('div')
            const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAANvklEQVR4Xu2cMatmVxmF19QKFlYDGtBJMY2gYCcq2gwhk0B+gJ2KMgTyC6zENgQCSiwi4g+IjoGxjFPaxFQJTBFhwNZC68g3pL5rwbxu197fc9tv5T3vedaZJ/u7F84t8QMBCFwtgVtXe+fcOAQgIATAQwCBKyaAAK64fG4dAgiAZwACV0wAAVxx+dw6BBAAzwAErpgAArji8rl1CCAAngEIXDEBBHDF5XPrEEAAPAMQuGICCOCKy+fWIYAAeAYgcMUEEMAVl8+tQwAB8AxA4IoJIIArLp9bhwAC4BmAwBUTQABXXD63DoHVAngg6RWwLyHwVNKPh670rqTbQ7MYczOB9yT9ZhWk1QJ4W9JFAvz87wl8Iunu0GWeSLozNIsxNxN4S9IbqyAhgFWk118HAaxnPnFFBDBBkRlCAHs+BAhgz97qtkYAdZVECyGACBMhRwABOEKdnyOAzl622woBbFfZs4URwJ691W2NAOoqiRZCABEmQo4AAnCEOj9HAJ29bLcVAtiuMr4C7FlZ59YIoLMXtxUnAEeIzyMCCCDCVBdCAHWV7LkQAtizNwSwZ291WyOAukqihRBAhImQI4AAHKHOzxFAZy/bbYUAtquMvwLsWVnn1gigsxe3FScAR4jPIwIIIMJUF0IAQSWfSvpjkNsx8i1J3xtYvFEAH0j6cODeGke8JumFgcUQQADxfUn3g9yOkcvbYN4cWLxRAK9LurwV6sSfR5LuDdwYAgggIgAPCQF4RpMJBBDQnHonIALwsBGAZzSZQAABTQTgIfEVwDNqTCCAoBUE4CEhAM+oMYEAglYQgIeEADyjxgQCCFpBAB4SAvCMGhMIIGgFAXhICMAzakwggKAVBOAhIQDPqDGBAIJWEICHhAA8o8YEAghaQQAeEgLwjBoTCCBoBQF4SAjAM2pMIICgFQTgISEAz6gxgQCCVhCAh4QAPKPGBAIIWkEAHhIC8IwaEwggaAUBeEgIwDNqTCCAoBUE4CEhAM+oMYEAglYaBXA32DuJPJX07yRoMgjAQ/yipK/4WJT4OEr5EALwjJ69DeZBkHORyfcBfOYuFn7+kqTLQ/C8PwjAE7y8Deqhj0WJW1HKhxCAZ4QAAkYIwENCAJ5RlJiyX3Sxz98HxwngZloIwD9NCMAzihIIQOIrgH9Unki642M2MfVSUARgUWcBBIAAkicFAXhK/A7AM+J3AAEjvgJ4SJwAPKMowQmAE0DyoHAC8JQ4AXhGnAACRpwAPCROAJ5RlOAEwAkgeVA4AXhKnAA8I04AASNOAB4SJwDPKEpwAuAEkDwonAA8JU4AnhEngIARJwAPiROAZxQlOAFwAkgeFE4AnhInAM+IE0DAiBOAh8QJwDOKEpwAOAEkDwonAE+JE4BnxAkgYMQJwEPiBOAZRQlOAJwAkgeFE4CnxAnAM+IEEDDiBOAhcQLwjKIEJwDpxYiUD/1T0n98zCYQgEWkL0i67WNR4nK6mfjhBBBQbHwlWLD20ggCWIp77GIIIECJADwkBOAZNSYQQNAKAvCQEIBn1JhAAEErCMBDQgCeUWMCAQStIAAPCQF4Ro0JBBC0ggA8JATgGTUmEEDQCgLwkBCAZ9SYQABBKwjAQ0IAnlFjAgEErSAADwkBeEaNCQQQtIIAPCQE4Bk1JhBA0AoC8JAQgGfUmEAAQSsIwENCAJ5RYwIBBK0gAA8JAXhGjQkEELSCADwkBOAZNSYQQNAKAvCQEIBn1JhAAEErCMBDQgCeUWMCAQStIAAPCQF4Ro0JBBC0MiWAf0j6c3C9HSPflPSdgcU/kXR3YM5lxNQ7AR9L+mhop7Yxr0r66sBSb0m6/E9gyc+urwRbAmfzizQKYHOkS9ZHAEswn38RBLBnxwhgz97qtkYAdZVECyGACBMhRwABOEKdnyOAzl622woBbFfZs4URwJ691W2NAOoqiRZCABEmQo4AAnCEOj9HAJ29bLcVAtiuMr4C7FlZ59YIoLMXtxUnAEeIzyMCCCDCVBdCAHWV7LkQAtizNwSwZ291WyOAukqihRBAhImQI4AAHKHOzxFAZy/bbYUAtquMvwLsWVnn1gigsxe3FScAR4jPIwIIIMJUF0IAdZXsuRAC2LO3owXwc0kv79nLdls/lfSzoa1/K+n20CzG3EzgT5LeWQVp9RuBVt0X14EABAICCCCARAQCpxJAAKc2y31BICCAAAJIRCBwKgEEcGqz3BcEAgIIIIBEBAKnEkAApzbLfUEgIIAAAkhEIHAqAQRwarPcFwQCAggggEQEAqcSQACnNst9QSAggAACSEQgcCoBBHBqs9wXBAICCCCARAQCpxJAAKc2y31BICCAAAJIRCBwKgEEcGqz3BcEAgIIIIBEBAKnElgtgLclPTgVZtl98U7ArJCpfwOPJN3LLnlj6uh3AiKAgSckHIEAMlAIIOM0kkIAIxijIQggwiQEkHEaSSGAEYzREAQQYUIAGaaZFAKY4ZhMQQAJJSGADNNMCgHMcEymIICEEgLIKA2lEMAQyGAMAgggCQFklIZSCGAIZDAGAQSQEEAGaSqFAKZI+jkIwDO6JPgrQMZpJIUARjBGQxBAhAkBZJhmUghghmMyBQEklDgBZJSGUghgCGQwBgEEkPgKkEGaSiGAKZJ+DgLwjPgdQMZoLIUAxlDaQQjAInoW4JeAGaeRFAIYwRgNQQARJgSQYZpJIYAZjskUBJBQ4gSQURpKIYAhkMEYBBBA4itABmkqhQCmSPo5CMAz4ncAGaOx1JQA/ibpF2NbdQ16TdJPB1ZCABnEv2Qxm/q2pC/blA/wRiDPSO9Luh/kdoy8IenNgcURwADE/8MIBBBARwAeEgLwjBoTCCBoBQF4SAjAM2pMIICgFQTgISEAz6gxgQCCVhCAh4QAPKPGBAIIWkEAHhIC8IwaEwggaAUBeEgIwDNqTCCAoBUE4CEhAM+oMYEAglYQgIeEADyjxgQCCFpBAB4SAvCMGhMIIGgFAXhICMAzakwggKAVBOAhIQDPqDGBAIJWEICHhAA8o8YEAghaQQAeEgLwjBoTCCBoBQF4SAjAM2pMIICgFQTgISEAz6gxgQCCVhCAh4QAPKPGBAIIWpkUwOUFHBM/70n6dGDQyS8E+UDShwOMvi7plYE5jSMQQNDKpAA+C66XRF6S9CgJmszJAnhd0uW1cM/7c3kb1MPnHVL63yOAoBgE4CE1fgVAAL43BOAZjb4TkBOAB/5E0h0fswkEYBEJAXhGCCBgxAkggFQYQQBBKXwF8JAQgGfUmEAAQSsIwENCAJ5RYwIBBK0gAA8JAXhGjQkEELSCADwkBOAZNSYQQNAKAvCQEIBn1JhAAEErCMBDQgCeUWMCAQStIAAPCQF4Ro0JBBC0ggA8JATgGTUmEEDQCgLwkBCAZ9SYQABBKwjAQ0IAnlFjAgEErSAADwkBeEaNCQQQtIIAPCQE4Bk1JhBA0AoC8JAQgGfUmEAAQSuTAvg4uF4S+Ymkx0nQZHghiIf4A0m/9rEtE7+X9KtVm99adaHPr3N5G8yDgWtOCmBgndERCGAUJ8NuIoAA+p4PBNDXybEbIYC+ahFAXyfHboQA+qpFAH2dHLsRAuirFgH0dXLsRgigr1oE0NfJsRshgL5qEUBfJ8duhAD6qkUAfZ0cuxEC6KsWAfR1cuxGCKCvWgTQ18mxGyGAvmoRQF8nx26EAPqqRQB9nRy7EQLoqxYB9HVy7EYIoK9aBNDXybEbIYC+ahFAXyfHboQA+qpFAH2dHLsRAuirFgH0dXLsRgigr1oE0NfJsRvtKoBjCxm8sZPfCfhDSe8MsXpxaM67kr47MOt3kn45MCcagQAiTFuGThbAfUkPh1qZ+jfwSNK9gZ14KegAREZICCB7ChBAxmkkNfVS0JFlDh+CALKCEUDGaSSFAEYwRkMQQIRJCCDjNJJCACMYoyEIIMKEADJMMykEMMMxmYIAEkpCABmmmRQCmOGYTEEACSUEkFEaSiGAIZDBGAQQQBICyCgNpRDAEMhgDAIIICGADNJUCgFMkfRzEIBndEnwV4CM00gKAYxgjIYggAgTAsgwzaQQwAzHZAoCSChxAsgoDaUQwBDIYAwCCCDxFSCDNJVCAFMk/RwE4BnxO4CM0VgKAYyhtIMQgEX0LMAvATNOIykEMIIxGoIAIkwIIMM0k0IAMxyTKQggocQJIKM0lPq+pG8MzWLMzQT+JekPQ5B+JOlLA7P+KumjgTlfk/TywJzLiMv/lCZ+XpX0wsCgv0t6PDAnGjH1/Se6GCEIQKCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUAAJYipuLQaCLAALo6oNtILCUwH8Ba/IDTP0tUc4AAAAASUVORK5CYII='
            container.innerHTML = `
                <div class='svrx-plugin-qrcode'>
                <img class='icon' src='${icon}'/>
                ${urlData}
            </div>`
            document.body.append(container)
        })
    }
})



