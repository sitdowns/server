import { Schema, ODM } from '../rules'

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

ODM.model('Report', reportSchema)

module.exports = reportSchema
