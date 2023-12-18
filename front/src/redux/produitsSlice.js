import {createSlice} from "@reduxjs/toolkit"

const produitsSlice = createSlice({
    name:"produit",
    initialState:[
        {
            name:"redux lac 1",
            postUrl:"pvvostUrl",
            rating:"14",
            price:"145 dt",
            categorie:"657ab865a48cc117de835316"

          }
, {
    name:"redux lac 1",
    postUrl:"pvvostUrl",
    rating:"14",
    price:"145 dt",
    categorie:"657ab865a48cc117de835316"

  }, {
    name:"redux lac 1",
    postUrl:"pvvostUrl",
    rating:"14",
    price:"145 dt",
    categorie:"657ab865a48cc117de835316"
  }],
reducers:{
    setproduit:(state,action)=>{
        return action.payload
    }
}
})

export const {setproduit} = produitsSlice.actions 
export default produitsSlice.reducer