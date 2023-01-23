
const {model, Schema} = require('mongoose')

const quizzScheme = new Schema({
    _id: String,
    subject: String,
    title: String,
    ud: Number,
    ra: String,
    questions : []
})

const Quiz = model('Quiz', quizzScheme)

module.exports = Quiz
