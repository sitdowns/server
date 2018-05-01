const reportData = require('../data/report')

const report = {
    getById: (id, callback) => reportData.getById(id, callback)
}

module.exports = report
