const mongoose=require('mongoose')
const AuthorSchema = mongoose.Schema({
    lastName: { 
        type: String, 
        required: true 
    },
    firstName: {
          type: String,
          required: true
         },
    nationality: { 
         type: String,
         required: false
         },
         livre: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Livre'
          },
    
  });
  
  module.exports = mongoose.model('Author', AuthorSchema);
  