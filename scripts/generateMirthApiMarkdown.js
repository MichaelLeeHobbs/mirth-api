const MirthApi = require('../src/MirthApi')
const fs = require('fs-extra')
const changeCase = require('change-case')

// todo replace with command line args
const MIRTH_USER = 'admin'
const MIRTH_PASSWORD = 'admin'
const MIRTH_HOST = '10.100.96.61'
const MIRTH_PORT = '8443'

async function main() {
    let mirthClient = await new MirthApi({host: MIRTH_HOST, port: MIRTH_PORT, username: MIRTH_USER, password: MIRTH_PASSWORD, disableTLSCheck: true})
    // console.log(mirthClient._client.apis)
    let tags = new Map()
    let keys = Object.keys(mirthClient._client.spec.paths)
    keys.forEach(key=>{
        let subKeys = Object.keys(mirthClient._client.spec.paths[key])
        subKeys.forEach(subKey=>{
            let operation = mirthClient._client.spec.paths[key][subKey]
            let tag = operation.tags[0]
            if (!tags.has(tag)) tags.set(tag, new Map())
            // console.log(operation)
            tags.get(tag).set(operation.operationId, operation)
        })
    })
    // console.log(tags)
    let markdown = ''
    tags.forEach(tag=>{
        tag.forEach((operation, key)=>{
            let options = `{${operation.parameters.map(({name, required})=>`${name}${required ? '*' : ''}`).join(', ')}}`
            if (options === '{}') options = ''
            let name = changeCase.pascal(operation.tags[0])
            markdown += [
                `#### ${name}.${key}(${options})\r\n`,
                `Summary: ${operation.summary}\r\n`,
                `Description: ${operation.description}\r\n`,
                `Parameters:\r\n`,
                `| Name | Description | Required |`,
                `| ------ | ------ | ------ |\r\n`,
            ].join('\r\n')

            operation.parameters.forEach(param=>markdown += `| ${param.name} | ${param.description} | ${param.required ? 'Yes' : 'No'} |\r\n`)
            markdown += [
                `\r\nResponses:\r\n`,
                `| Name | Description | Schema |`,
                `| ------ | ------ | ------ |\r\n`,
            ].join('\r\n')
            Object.keys(operation.responses).forEach(key=>{
                let {description, schema = ''} = operation.responses[key]
                if (typeof schema === 'object') {
                    schema.$$ref = undefined
                    schema = JSON.stringify(schema)
                }
                schema = ''
                markdown += `| ${key} | ${description} | ${schema} |\r\n`
            })
            markdown += '---\r\n'
        })
    })
    fs.writeFileSync('./documents/MirthApi.3.7.1.md', markdown)
    console.log(markdown)
}
main()




