import axios from 'axios';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';

const Reservation =()=>{ 

const [date, setDate] = useState(new Date());
const [reservat,setReservat]=useState()
const onChange = (value) => {
   setDate(value);
   setReservat(date.toLocaleDateString())
   console.log("tyhuj,n,;:",date,reservat)
};
const {idproduit}=useParams()
const{iduser}=useParams()

const add=async(value)=>{
 await axios.post(`http://localhost:4000/reservation/${idproduit}/${iduser}`,{...value})
await alert('you did it')

}
console.log('')

return (
   <div className="App">
     <Calendar onChange={()=>onChange()} value={date} />
     <p>Selected date: {date.toLocaleDateString()}</p>
     {/* <button onClick={()=>add({iduser,idproduit,})}  >reservation</button> */}
   </div>
);
}

export default Reservation
