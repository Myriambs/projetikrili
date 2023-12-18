import {createSlice} from "@reduxjs/toolkit"

const categorieSlice = createSlice({
    name:"categorie",
    initialState:[
        { name : "Redux categorie1"}
   
,{ name : "Redux categorie2"},{ name : "Redux categorie3"}],
reducers:{
    setcategorie:(state,action)=>{
        return action.payload
    }
}
})

export const {setcategorie} = categorieSlice.actions 
export default categorieSlice.reducer