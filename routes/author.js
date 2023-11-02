const express=require('express')
const router = express.Router();


const controllerAuthor=require("../controllers/Author")


router.post('/api/addAuthor', controllerAuthor.AddAuthor);
  
   
   
   
     module.exports=router