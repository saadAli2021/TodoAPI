const express = require("express")
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TODO_DB',{useNewUrlParser:true});

const db = mongoose.connection;
db.on('error',(error)=>console.log("Error : ")
);

db.once('open',()=>{console.log("connected to Database..")})

app.listen(3000,()=>{
    console.log("server started...");
})