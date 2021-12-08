const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    fullName: { type: String, require: true, unique: true },
    logoLink: {type: String, required: true},
    isDeleted:{
        type:Boolean,
        default:false
    }
}, {timestamps: true})

module.exports = mongoose.model('College', collegeSchema)