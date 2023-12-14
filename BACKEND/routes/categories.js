 const express = require('express')
const categoriesSchema = require('../model/categories')
 const categoriRoute = express.Router()

 categoriRoute.get('/allgat',async(req,res)=>{
try{

    const getAll = await categoriesSchema.find()
    res.status(200).json({msg:"voici kolhom",getAll})

}catch(err){
console.log(err)

res.status(500).json({ message: err });
}
})

categoriRoute.post('/addgategorie',async(req,res)=>{
    try{
        const category  = new categoriesSchema(req.body)
       await  category.save()
        res.status(200).json({msg:"hak zidet categorie jdida",category})
    }catch(err){
    console.log(err)}
    })
    

 module.exports = categoriRoute