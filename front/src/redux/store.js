import {configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'
import StadiumsSlice from './StadiumsSlice'
export default configureStore({
    reducer:{
        auth : authSlice,
        Stadiums:StadiumsSlice
    }
}) 