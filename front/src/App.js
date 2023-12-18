
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Register2 from './components/register/Register2';
import Dorra from './components/Dorra/Dorra';
import Admin from './components/Admin/Admin';
import AjoutStatdium from './components/Admin/zidenkeryet/AjoutStadium/AjoutStatdium';
import UpdateStadium from './components/Admin/zidenkeryet/UpdateStadium/UpdateStadium'
import Categroie from './components/produiyet/Categroie';
import Produiyet from './components/produiyet/Produiyet';
import Reservation from './components/Reservation';
function App() {
  return (
    <div >
     <Routes>
<Route path='/' element ={<HomePage/>}/>
<Route path='/dorra' element ={<Dorra/>}/>
<Route path='/register' element = {<Register2/>}/>
<Route path='/login' element = {<Login/>}/>
<Route path='/admin' element = {<Admin/>}/>
<Route path='/app/privateRoute' element = {<PrivateRoute/>}/> 
<Route path='/zidstadium' element = {<AjoutStatdium/>}/> 
<Route path='/zidstadium/:id' element = {<UpdateStadium/>}/> 
    
<Route path='/gat' element={<Categroie/>}/>
<Route path='/produits/:id' element={<Produiyet/>}/>

<Route path='/produitsupdate/:id' element={<Produiyet/>}/> 
 <Route path='/ajoutProduit' element={<Produiyet/>}/> 
 <Route path='/removeProduit/:id' element={<Produiyet/>}/> 


 <Route path='/categorieupdate/:id' element={<Produiyet/>}/> 
 <Route path='/ajoutCategorie' element={<Produiyet/>}/> 
 <Route path='/removeCategorie/:id' element={<Produiyet/>}/> 

<Route path='/reservation/:idproduit/:iduser' element={<Reservation/>}/>

 {/* pannier */}


{/* reservation */}
{/* nposty date , jour heure w note impoirtante in case of tji lil admin ytoguli el accept ou remove  tji updated lil user  */}
     </Routes>


    </div>
  );
}

export default App;
