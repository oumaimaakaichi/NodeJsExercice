const express=require('express')
const Category = require('../models/Category')
 const Livre=require('../models/Livre')

const AddCategory=async(req , res)=>{

    const category = new Category (req.body); 
    category.livre=req.body.livre
    const livre = await Livre.findById(req.body.livre);
    if (livre) {
      livre.categories.push(category._id);
      await livre.save();
    }
    category.save().then(()=>{
    res.status(201).json({ 
       model : category , 
       message : "category added successfully " ,
   
    })
    
   })
   .catch((error)=>{
       res.status(400).json({
   
           error:error.message,
           message:'Données invalides',
       })
   })


}
const GetCategoryById=(req , res)=>{

    Category.findOne({_id:req.params.id},
        req.body , {new : true})
        .then((categories)=>{
            if(!categories){
                res.status(404).json({
                    message:"Objet non trouvé"
                })
            }
            else{
            res.status(200).json({
                model:categories,
                })}
        })
        
        .catch((error)=>{
            res.status(400).json({
                error:error.message,
                message:"probleme d'extraction",
            })
         })

    
}
module.exports={
   AddCategory,
   GetCategoryById
}
