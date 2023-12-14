const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

//creation of the schemma 

const produitsSchema = mongoose.Schema({
  
    name:String ,
    postUrl:String ,
    rating:String ,
    price: String ,
    category: {
        type: ObjectId,
        ref: "Category",
        required : true,
    
    },    

})

module.exports = mongoose.model('produitsSchema',produitsSchema)