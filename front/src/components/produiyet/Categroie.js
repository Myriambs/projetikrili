import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setcategorie } from '../../redux/categorieSlice'
import { fetchcategorie } from '../../api/categorie'
import  {useNavigate} from 'react-router-dom'
const Categroie = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cat = useSelector(state=>state.categorie)
    console.log('cat',cat)
    const getcategprie=async()=>{
     const data = await fetchcategorie()
     dispatch(setcategorie(data.getAll))
    }
    useEffect(()=>{
        getcategprie(  )
    },[])
  return (
    <div>
      <ul>
        {
        cat.map((el)=> (<><li   onClick={()=>navigate(`/produits/${el._id}`)}  >  {el.name} </li> </> ))}
      </ul>
    </div>
  )
}
export default Categroie
