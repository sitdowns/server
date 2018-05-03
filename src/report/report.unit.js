const chai = require('chai')
const assert = chai.assert

const model = require('./report.model')
const businessRules = require('./report.business-rules')
const data = require('./report.data')
const routeHandler = require('./report.route-handler')


describe('server/src/report', () => {
    describe('model', () => {
        it('reportSchema is defined and not sealed', () => {
            assert.isDefined(model, `require('./report') is not defined.` /* error case string */)
            assert.isNotSealed(model, `require('./report') is sealed.` /* error case string */)
        })

    })
})
