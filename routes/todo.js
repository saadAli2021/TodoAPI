/* --------------------------------------------------------------- */
const express = require("express")
const router = express.Router();
const model = require('../models/model.js');
/* --------------------------------------------------------------- */
router.get('/',async (req,res)=>{
try {
    const todolist = await model.find();
    res.json(todolist);
} catch (error) {
    res.status(500).json({messageError : error.message});
}
})
/* --------------------------------------------------------------- */
router.post('/',async (req,res)=>{
    const todo = new model({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status,
        date:req.body.date
    })
    try {
        const newtodo = await todo.save();
        res.status(201).json(newtodo);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})
/* --------------------------------------------------------------- */
router.get('/:id',(req,res)=>{
    res.send("get todos  by ID  : "+req.params.id);

})
/* --------------------------------------------------------------- */
router.patch('/:id',(req,res)=>{
    console.log("patch todo  ...");

})
/* --------------------------------------------------------------- */
module.exports = router;
/* --------------------------------------------------------------- */