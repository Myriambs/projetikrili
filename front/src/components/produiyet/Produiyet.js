import React from 'react'
import  { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  {useNavigate,useParams} from 'react-router-dom'
import { fetchproduit } from '../../api/produiyet'
import { setproduit } from '../../redux/produitsSlice'
import axios from 'axios'
const Produiyet = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id}=useParams()
  const produits = useSelector(state=>state.produit)
  console.log('produits',produits)
  console.log('id',id)
  const getproduit=async(id)=>{

   const data =  await axios.get(`http://localhost:4000/produits/jibproduit/${id}`);
  //  return data 
   console.log('data lina',data)
   dispatch(setproduit(data.data.products))
  }
  useEffect(()=>{
    getproduit(  id)
  },[id])
  const iduser="657ca283eb1d92ed20976b8"
  return (
    <div>
       {produits.length>0 ? produits.map((el)=>(<ul onClick={()=>navigate(`/reservation/${el._id}/${iduser}`)}  >{el.name}</ul>)) : (<h1>raw data fergha </h1>)}
    </div>
  )
}

export default Produiyet
