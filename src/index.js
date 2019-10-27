const Swagger = require('swagger-client')
const changeCase = require('change-case')

let COOKIE = ''
let loginRef = ''

class MirthApi {
    constructor({host = '127.0.0.1', port = '8443', username = 'admin', password = 'admin', noLogin = false, disableTLSCheck = false} = {}) {
        this._host = host
        this._port = port
        this._username = username
        this._password = password
        this.login.bind(this)
        if (disableTLSCheck) {
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"
        }
        return this._init({noLogin})
    }

    async _init({noLogin}) {
        this._client = await new Swagger({
            url: this.url,
            requestInterceptor: function (req) {
                req.headers["Cookie"] = COOKIE
                console.log('requestInterceptor', req)
                return req
            }
        })
        loginRef = this._client.apis['Users'].login
        this._client.apis['Users'].login = this.login
        Object.keys(this._client.apis).forEach(key => {
            let newKey = changeCase.pascal(key)
            this[newKey] = this._client.apis[key]
        })
        this.Users.login = this.login.bind(this)
        if (!noLogin) await this.login()
        return this
    }

    get url() {
        return `https://${this._host}:${this._port}/api/swagger.json`
    }

    get cookie() {
        return COOKIE
    }

    set cookie(value) {
        COOKIE = value
    }

    async login({username = this._username, password = this._password} = {}) {
        // let res = await this._originalLoginFunc({username, password})
        // let res = await this._client.apis['Users'].login({username, password})
        let res = await loginRef({username, password})
        COOKIE = res.headers['set-COOKIE']
        return res
    }

    get swaggerClient() {
        return this._client
    }

    get host() {
        return this._host
    }

    set host(value) {
        this._host = value
    }

    get port() {
        return this._port
    }

    set port(value) {
        this._port = value
    }

    get username() {
        return this._username
    }

    set username(value) {
        this._username = value
    }

    get password() {
        return this._password
    }

    set password(value) {
        this._password = value
    }
}

module.exports = MirthApi
