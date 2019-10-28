const Swagger = require('swagger-client')
const changeCase = require('change-case')
const xml2js = require('xml2js')

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
        const xmlBuilder = new xml2js.Builder()
        const xmlParser = new xml2js.Parser()
        const xmlParse = async (xml)=> {
            try {
                return await xmlParser.parseStringPromise(xml)
            } catch (e) {
                return undefined
            }
        }

        this._client = await new Swagger({
            url: this.url,
            requestInterceptor: function (req) {
                req.headers["Cookie"] = COOKIE
                if (req.body && req.body.indexOf('{') === 0) {
                    req.body = xmlBuilder.buildObject(JSON.parse(req.body))
                }
                return req
            },
            responseInterceptor: async function (res) {
                // if (res.ok) {
                    if (res.headers['set-cookie']) {
                        COOKIE = res.headers['set-cookie']
                    }
                    if (typeof res.text === 'string' && res.statusText !== 'No Content') {
                        res.json = await xmlParse(res.text)
                    } else if (typeof res.text.toString === 'function' && res.statusText !== 'No Content') {
                        let text = await res.text.toString()
                        res.json = await xmlParse(text)
                    }
                // }
                return res
            }
        })
        loginRef = this._client.apis['Users'].login
        this._client.apis['Users'].login = this.login
        Object.keys(this._client.apis).forEach(key => {
            let newKey = changeCase.pascal(key)
            this[newKey] = this._client.apis[key]
        })
        this.Users.login = this.login.bind(this)
        if (!noLogin) await this.Users.login({username: this._username, password: this._password})
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
        // COOKIE = res.headers['set-cookie']
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
