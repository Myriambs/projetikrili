import axios from 'axios'

 export const  addingReservation=async(userId,produitId,value)=>{
const adding = await axios.post(`http://localhost:4000/reservation/${userId}/${produitId}`,{...value})

}