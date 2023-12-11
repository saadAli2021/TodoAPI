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
router.get('/:id',getTodoByID, async(req,res)=>{
    res.json(res.todo);

})
/* --------------------------------------------------------------- */
router.patch('/:id',getTodoByID, async(req,res)=>{
    console.log(req.body);
    const updateFields = { ...req.body };
    try {
        // Update the existing todo with the new fields
        Object.assign(res.todo, updateFields);

        // Save the updated todo
        const updatedTodo = await res.todo.save();

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Error while updating: " + error.message });
    }
    
})
/* --------------------------------------------------------------- */
router.delete('/:id',getTodoByID,async (req,res)=>{
    try {
        await res.todo.deleteOne()
        res.status(200).json({message: "deleted sucessfully",todo : res.todo})

    } catch (error) {
        res.status(500).json({message : "error while deleting"+error.message});
    }
   
})
/* --------------------------------------------------------------- */
async function getTodoByID(req,res,next){
let todo;
    try {
        todo = await model.findById(req.params.id);
        if(todo == null){
            return res.status(404).json({message : "todo not found."})
        }

    } catch (error) {
        return res.status(500).json({message : "an error occured"})
    }
    res.todo = todo;
   next();
}
/* --------------------------------------------------------------- */
module.exports = router;
/* --------------------------------------------------------------- */