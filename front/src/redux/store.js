import {configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'
import StadiumsSlice from './StadiumsSlice'
import produitsSlice from './produitsSlice'
import categorieSlice from './categorieSlice'
export default configureStore({
    reducer:{
        auth : authSlice,
        Stadiums:StadiumsSlice,
        produit:produitsSlice,
        categorie:categorieSlice
    }
}) 