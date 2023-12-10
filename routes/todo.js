const express = require("express")
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("All todos list ...");
})

router.get('/:id',(req,res)=>{
    console.log("get todos  by ID ...");

})

router.post('/',(req,res)=>{
    console.log("post todos  ...");

})

router.patch('/:id',(req,res)=>{
    console.log("patch todo  ...");

})

module.exports = router;