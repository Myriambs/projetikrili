const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const connectdb = require ('./config/connecteddb')
const userRoute = require ('./routes/routeuser')
// const afra7rRoute = require('./routes/afra7Route')
const categoriRoute = require('./routes/categories')
const produitRoute = require('./routes/produits')

const routerReservation = require('./routes/reservation')
// const meetingrRoute = require('./routes/meetingRoute')
require('dotenv').config()
app.use(cors())
app.use(express.json())

//partie appel la cnx db
connectdb()

//path pincipale de l'authentification 
app.use('/auth',userRoute)


// partie admin yazid les produist
app.use('/categorie',categoriRoute)
app.use('/produits',produitRoute)



//partie user y"Adi reservation 
app.use('/reservation',routerReservation)




app.listen(port,err=>{
    err?console.log(err):console.log(`go port ${port} `)
})