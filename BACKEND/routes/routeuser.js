const express = require('express')

const userRoute = express.Router()

const {register,login,updatedProfil} = require('../controller/userControllers')
const {isAuth} = require('../middelwares/isAuth')
const {registerValidation,loginValidation,validation} = require('../middelwares/RegisterValidation')

userRoute.post('/register',registerValidation,validation,register)


userRoute.post('/login',loginValidation,validation,login)

userRoute.get('/me',isAuth,(req,res)=>{
    res.send(req.user)
    
})

userRoute.put('/updateProfil/:id',isAuth,registerValidation,validation,updatedProfil)



















module.exports = userRoute