const express = require('express')

const produitsSchema = require('../model/produiet')

const categoriesSchema = require('../model/categories')

const produitRoute = express.Router()

produitRoute.get('/jibproduit/:idcate',async(req,res)=>{
try{
const products = await produitsSchema.find({ category: req.params.id  }).populate('category', 'name')
console.log("products",products)
res.status(200).json({msg:'voici les produits',products})
}catch(err){
console.log(err)
}
})


produitRoute.post('/ajoutproduit',async(req,res)=>{
try{
const newProducct = new produitsSchema(req.body)
newProducct.save()
    res.json({msg:"new produits",newProducct})
 }catch(err){
console.log(err)
}
})




module.exports = produitRoute