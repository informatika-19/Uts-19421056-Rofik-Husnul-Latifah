const mongoose = require('mongoose')
const Schema = mongoose.Schema

const managemenSchema = new Schema({
    
    UserName: {
        type: String,
    },
    Email: {
        type: String
    },
    Gander: {
        type: String
    },
    
    Status: {
        type: String
    }
    
})

module.exports=mongoose.model('managemen', managemenSchema)