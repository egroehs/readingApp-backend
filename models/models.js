const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    year: { type: Number, require: true },
    review: { type: Number, require: false },
    notes: { type: String, require: false }
})

module.exports = mongoose.model('Reading', readingSchema)
