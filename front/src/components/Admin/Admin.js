import React, { useEffect } from 'react'
import "./Admin.css"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthUser } from '../../api/authuser'
import { setAuth } from '../../redux/authSlice'
const Admin = () => {

  const token = localStorage.getItem('token')
const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}

const dispatch =  useDispatch()
const navigate = useNavigate()

const authUser = useSelector(state=>state.auth)

console.log(' data  auth -_- => ',authUser)
const getAcount=async()=>{
  try{
    const data = await fetchAuthUser()
    console.log('data login =WWWWWWWWWW/*  */', data)
    await dispatch(setAuth(data)) 
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  getAcount()
},[])
  return (
    <div className='bodyAdmin'>
    <header className="headerAdmin">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
        
            <h3> {authUser.role}</h3>        
        </div>
        <div className="header-navigation">
          <nav className="header-navigation-links">
            <a href="#"> {authUser.name} </a>
            <a href="#"> Dashboard </a>
            <a href="#"> Projects </a>
            <a href="#"> Tasks </a>
            <a href="#"> Reporting </a>
            <a href="#"> Users </a>
          </nav>
          <div className="header-navigation-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-lightning-bold" />
              <span onClick={()=>logout()}   >Logout </span>
            </a>
           
            <a href="#" className="avatar">
             <img src="https://assets.codepen.io/285131/hat-man.png" alt="" />
            </a>
          </div>
        </div>
        <a href="#" className="buttonAdmin">
          <i className="ph-list-bold" />
          <span>Menu</span>
        </a>
      </div>
    </header>
    <main className="main">
      <div className="responsive-wrapper">
        <div lassName="main-header">
          <h1>ya Welcome </h1>

        </div>
        <div className="horizontal-tabs">
          <a href="#">My Stadiums</a>
          <a href="#"   >Add Stadiums </a>
          <a href="#">view users </a>
          <a href="#">view reservations </a>
          <a href="#">Plan</a>
          <a href="#">Billing</a>
          <a href="#">Email</a>
          <a href="#">Notifications</a>
          <a href="#" className="active">
            Integrations
          </a>
        </div>
        <div className="content-headerAdmin">
       
          <div className="content-headerAdmin-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-faders-bold" />
              <span>Filters</span>
            </a>
            <a href="#" className="buttonAdmin">
              <i className="ph-plus-bold" />
             <button >Addstadium</button>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="content-panel">
            <div className="vertical-tabs">
              <a href="#" className="active">
                View all
              </a>
              <a href="#">Developer tools</a>
              <a href="#">Communication</a>
              <a href="#">Productivity</a>
              <a href="#">Browser tools</a>
              <a href="#">Marketplace</a>
            </div>
          </div>
          <div className="content-main">
            <div className="card-grid">
             
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  )
}
export default Admin
