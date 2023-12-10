const mongoose = require('mongoose');

const todos = new mongoose.Schema({
    
    title:{
        type:String,
        required :true
    },
    description:{
        type:String,
        required :true
    },
    status:{
        type : Boolean,
        required:true,
        default:false
    },
    date:{
        type : Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('todos',todos)