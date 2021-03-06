import {utils} from './utils'

export class Loader {
    constructor(obj, id, cb, t) {
        this.id = id
        this.obj = obj
        this.callback_name = `${(this.id || '').replace(/\W/g, '_')}_callback`
        this.event = `${(this.id || '').replace(/\W/g, '_')}_loaded`
        this.callback = cb
        this.time = t || 500
    }
    get utils() {return utils}
    set(k, v) {
        this[k] = v
        return this
    }
    addCallback() {
        this.utils.loadJs('', this.callback_name, null, `
            window.${this.callback_name} = function() {
                setTimeout(e => dispatchEvent(new CustomEvent('${this.event}')), ${this.time})
            }
        `)
    }
    load() {
        this.addCallback()
    }
}
export class JsLoader extends Loader {
    load() {
        super.load()
        this.utils.loadJs(this.obj, this.id, this.callback || window[this.callback_name])
    }
}
export class CssLoader extends Loader {
    load() {
        super.load()
        this.utils.loadCss(this.obj, this.id, this.callback || window[this.callback_name])
    }
}
export class StyleLoader extends Loader {
    load() {
        super.load()
        this.utils.loadStyle(this.obj, this.id, this.callback || window[this.callback_name])
    }
}
export class MetaLoader extends Loader {
    load() {
        super.load()
        this.utils.loadMeta(this.obj, this.id, this.callback || window[this.callback_name])
    }
}
