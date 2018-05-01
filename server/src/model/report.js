const { Schema, ODM, DB } = require('../rules')

const reportSchema = new Schema({
    name: String,
    project: String,
    did: [String],
    doing: [String],
    blocked: { type: [String], default: ['none'] },
    pin: { type: Number, default: 2444 },
    deleted: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
})

const modelName = 'Report'
DB.Models[modelName] = ODM.model(modelName, reportSchema)
DB.Schemas[modelName] = reportSchema
console.info(`Setting up schema and model: DB.Models.${modelName}`)

module.exports = reportSchema
