const mongoose=require('mongoose')
const livreSchema = mongoose.Schema({
    titre: { 
        type: String, 
        required: true 
    },
   
   
     Prix: { 
            type: Number,
            required: true
            },
            description:{
                type:String,
                
            } ,
        disponibilité:{
            type:Boolean,
            Request:true,
            default:true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author'
          },
          categories: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Category'
            }
          ]
    
  });
  
  module.exports = mongoose.model('Livre', livreSchema);
  