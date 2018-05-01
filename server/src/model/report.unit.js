const chai = require('chai')
const assert = chai.assert

const lib = require('./report')

const filename = 'server/src/model/report'
describe(filename, () => {
    console.log(`File: ${filename}`)
    let testname = 'exports reportSchema'
    it(testname, () => {
        console.log(`Test: ${testname}`)
        assert.isDefined(lib, `require('./report') is not defined.` /* error case string */)
        assert.isNotSealed(lib, `require('./report') is sealed.` /* error case string */)
    })
})
