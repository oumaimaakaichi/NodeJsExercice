const express=require('express')
const Livre = require('../models/Livre')
 const Author=require('../models/Author')
const Category=require('../models/Category')
const AddLivre=async(req , res)=>{

    const livre = new Livre (req.body); 


    livre.author = req.body.author
    livre.categories=req.body.categories
    
    await Author.updateOne(
        { _id:req.body.author},
         {
             $addToSet: { livre: livre._id },
           },
           { new: true }
 
       )
       for (const categoryId of req.body.categories) {
        const category = await Category.findById(categoryId);
        if (category) {
          category.livre.push(livre._id);
          await category.save();
        }
      }

    livre.save().then(()=>{
    res.status(201).json({ 
       model : livre , 
       message : "book added successfully " ,
   
    })
    
   })
   .catch((error)=>{
       res.status(400).json({
   
           error:error.message,
           message:'Données invalides',
       })
   })


}
const GetAllLivre=(req , res)=>{

    Livre.find()
    .then((livres)=>{
       res.status(200).json(
           {
               model:livres,
               message:" successfully "
           }
       )
    })
    .catch((error)=>{
       res.status(400).json({
           error:error.message,
           message:"probléme d'extraction",
       }
          
       )
    })

    
}
const GetLivreById=(req , res)=>{

    Livre.findOne({_id:req.params.id},
        req.body , {new : true})
        .then((livres)=>{
            if(!livres){
                res.status(404).json({
                    message:"Objet non trouvé"
                })
            }
            else{
            res.status(200).json({
                model:livres,
                })}
        })
        
        .catch((error)=>{
            res.status(400).json({
                error:error.message,
                message:"probleme d'extraction",
            })
         })

    
}
const UpdateLivre=(req , res)=>{

    Livre.findOneAndUpdate({_id:req.params.id},
        req.body , {new : true})
        .then((livres)=>{
            if(!livres){
                res.status(404).json({
                    message:"Objet non trouvé"
                })
            }
            else{
            res.status(200).json({
                model:livres,
                message:"objet modifié"})}
        })
        
        .catch((error)=>{
            res.status(400).json({
                error:error.message,
                message:"probleme d'extraction",
            })
         })

    
}
const DeleteLivre=(req , res)=>{

    Livre.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "supprime" }))
    .catch((error) => res.status(400).json({ error: error.message }));

    
}


 
const getLivreByAuteur = async (req, res) => {
    try {
      const livre = await Livre.find({ author: req.params.id }).populate('author');
      res.status(200).json(livre);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Erreur lors de la récupération du livre' });
    }
  };
  
  const getLivreByCategory = async (req, res) => {
    try {
      const categoryId = req.params.id; 
      const livres = await Livre.find({ categories: categoryId }).populate('categories');
      res.status(200).json(livres);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Erreur lors de la récupération des livres de cette catégorie" });
    }
  };
module.exports={
    AddLivre,
    GetAllLivre,
    GetLivreById,
    UpdateLivre,
    DeleteLivre,
    getLivreByAuteur,
    getLivreByCategory
}

