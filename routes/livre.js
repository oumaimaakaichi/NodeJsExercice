const express=require('express')
const router = express.Router();


const controllerLivre=require("../controllers/livre")


router.post('/api/addLivre', controllerLivre.AddLivre);
router.get('/api/getAllLivre',  controllerLivre.GetAllLivre);
router.get('/api/getLivById/:id', controllerLivre.GetLivreById);

router.get('/api/getLivByAuteur/:id', controllerLivre.getLivreByAuteur);
router.get('/api/getLivreByCategory/:id', controllerLivre.getLivreByCategory);
router.patch('/api/uppdateLivre/:id',controllerLivre.UpdateLivre);
router.delete('/api/delete/:id',controllerLivre.DeleteLivre);


   
   
   
     module.exports=router