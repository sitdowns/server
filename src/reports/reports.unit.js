const chai = require('chai')
const assert = chai.assert

const model = require('./reports.model')
const businessRules = require('./reports.business-rules')
const data = require('./reports.data')
const routeHandler = require('./reports.route-handler')

describe('server/src/reports', () => {
    describe('model', () => {
        it('reportsSchema is defined and not sealed', () => {
            assert.isDefined(model, `require('./reports') is not defined.` /* error case string */)
            assert.isNotSealed(model, `require('./reports') is sealed.` /* error case string */)
        })

    })
})
