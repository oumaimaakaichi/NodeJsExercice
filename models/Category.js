const mongoose=require('mongoose')
const CategorySchema = mongoose.Schema({
    title: { 
        type: String, 
        enum:["Romantic" , "Horror" , "Mystery" ],
        required: true 
    },
    
    livre:[

     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livre'
      },]
    
  });
  
  module.exports = mongoose.model('Category', CategorySchema);
  