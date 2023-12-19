
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Register2 from './components/register/Register2';
import Dorra from './components/Dorra/Dorra';
import Admin from './components/Admin/Admin';
import Categroie from './components/produiyet/Categroie';
import Produiyet from './components/produiyet/Produiyet';
import Reservation from './components/Reservation';
import Client from './components/User/Client';
import ListReservations from './components/Admin/partieProduit_/ListReservations';
import AddReservation from './components/Admin/partieProduit_/AddReservation';
import UpdateReservation from './components/Admin/partieProduit_/UpdateReservation';
import DeleteReservation from './components/Admin/partieProduit_/DeleteReservation';
function App() {
  return (
    <div >
     <Routes>
<Route path='/' element ={<HomePage/>}/>
<Route path='/dorra' element ={<Dorra/>}/>
<Route path='/register' element = {<Register2/>}/>
<Route path='/login' element = {<Login/>}/>
//lina partie go to el component selon el role mt3ik 
<Route path='/app/privateRoute' element = {<PrivateRoute/>}/> 


//lina partie admin 
<Route path='/admin' element = {<Admin/>}/>
<Route path='/user' element = {<Client/>}/>



<Route path='/gat' element={<Categroie/>}/>
<Route path='/produits/:id' element={<Produiyet/>}/>

<Route path='/produitsupdate/:id' element={<Produiyet/>}/> 
 <Route path='/ajoutProduit' element={<Produiyet/>}/> 
 <Route path='/removeProduit/:id' element={<Produiyet/>}/> 


 <Route path='/categorieupdate/:id' element={<Produiyet/>}/> 
 <Route path='/ajoutCategorie' element={<Produiyet/>}/> 
 <Route path='/removeCategorie/:id' element={<Produiyet/>}/> 


//lin apartie user chy3ml reservation plau update profil 
<Route path="/reservations/:userId" element={<ListReservations />} />

{/* Add Reservation */}
<Route path="/add-reservation/:userId/:produits" element={<AddReservation />} />

{/* Update Reservation */}
<Route path="/update-reservation/:userId/:reservationId" element={<UpdateReservation />} />

{/* Delete Reservation */}
<Route path="/delete-reservation/:userId/:reservationId" element={<DeleteReservation />} />

     </Routes>


    </div>
  );
}

export default App;
