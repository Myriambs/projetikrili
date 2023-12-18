import axios from 'axios'




 export const fetchcategorie=async()=>{
    const {data} = await axios.get(`http://localhost:4000/categorie/allgat`);
    return data 
}

export const postcategorie = async(values)=>{
    const postcategories = await axios.post(`http://localhost:4000/categorie/addgategorie`,{...values})

}

export   const deletcategorie=async(id)=>{
    
    const deletcategories = await axios.delete(`http://localhost:4000/categorie/remove/${id}`)

}

export const updatecategorie = async(id,value)=>{
    const updatecategories = await axios.put(`http://localhost:4000/categorie/update/${id}`,value)
    
}

