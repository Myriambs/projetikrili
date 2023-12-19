import {configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'
import produitsSlice from './produitsSlice'
import categorieSlice from './categorieSlice'
export default configureStore({
    reducer:{
        auth : authSlice,
        produit:produitsSlice,
        categorie:categorieSlice
    }
}) 