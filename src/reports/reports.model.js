const { Schema, ODM, DB } = require('../rules')
const report = require('../report/report.model')

const reportsSchema = new Schema({
    reports: [{
        name: String,
        project: String,
        did: [String],
        doing: [String],
        blocked: { type: [String], default: ['none'] },
        pin: { type: Number, default: 2444 },
        deleted: { type: Boolean, default: false },
        timestamp: { type: Date, default: Date.now }
    }]
})

const modelName = 'Reports'
DB.Models[modelName] = ODM.model(modelName, reportsSchema)
DB.Schemas[modelName] = reportsSchema
console.info(`Setting up schema and model: DB.Models.${modelName}`)

module.exports = reportsSchema
