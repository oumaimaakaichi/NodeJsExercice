const express=require('express')
const Author = require('../models/Author')
 

const AddAuthor=(req , res)=>{

    const author = new Author (req.body); 
    author.save().then(()=>{
    res.status(201).json({ 
       model : author , 
       message : "Author added successfully " ,
   
    })
    
   })
   .catch((error)=>{
       res.status(400).json({
   
           error:error.message,
           message:'Données invalides',
       })
   })
}


module.exports={
   AddAuthor,
 
}