const express=require('express')
const router = express.Router();


const controllerCategory=require("../controllers/Category")


router.post('/api/addCategory', controllerCategory.AddCategory);
router.get('/api/getCategoryById/:id', controllerCategory.GetCategoryById);



  
   
   
   
     module.exports=router