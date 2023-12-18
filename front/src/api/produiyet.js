import axios from 'axios'

 export const fetchproduit=async(id)=>{
    const {data} = await axios.get(`http://localhost:4000/produits/jibproduit/${id}`);
    return data 
}

export const zidproduit=async(value)=>{
    const add = await axios.post(`http://localhost:4000/produits/ajoutproduit`);
}

export const updatih=async(value,idproduct,idcategorie)=>{
    const updatitou = await axios.put(`http://localhost:4000/produits/updateproduit/${idproduct}/${idcategorie}`,value);
}

export const removih=async(value,idproduct)=>{
    const remove = await axios.delete(`http://localhost:4000/produits/deleteproduit/${idproduct}`);
}
