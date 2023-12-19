import React, { useEffect } from 'react'
import './user.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/authSlice'
import { fetchAuthUser } from '../../api/authuser'
const Client = () => {

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
    <div className='bodyF'>
<div className="appClient">
    <header className="app-header">
      <div className="app-header-logo">
        <div className="logo">
          <span className="logo-icon">
            <img src="../../../partner.png" />
          </span>
          <h1 className="logo-title">
            <span>Almeria</span>
            <span>kerya.com</span>
          </h1>
        </div>
      </div>
      <div className="app-header-navigation">
        <div className="tabs">
          <a href="#">Overview</a>
          <a href="#" className="active">
            Payments
          </a>
          <a href="#">Cards</a>
          <a href="#">Account</a>
          <a href="#">System</a>
          <a href="#">Business</a>
        </div>
      </div>
      <div className="app-header-actions">
        <button className="user-profile">
          <span>{authUser.name} {authUser.lastName}</span>
          <span  style={{height: "74px",width: "77px"}}  >
            <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
          </span>
        </button>
        <div className="app-header-actions-buttons">
          <button className="icon-button large" onClick={()=>logout()}>
            <i className="ph-magnifying-glass" />
          </button>
          <button className="icon-button large">
            <i className="ph-bell" />
          </button>
        </div>
      </div>
      <div className="app-header-mobile">
        <button className="icon-button large">
          <i className="ph-list" />
        </button>
      </div>
    </header>
    <div className="app-body">
      <div className="app-body-navigation">
        <nav className="navigation">
          <a href="#">
            <i className="ph-browsers" />
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i className="ph-check-square" />
            <span>Scheduled</span>
          </a>
          <a href="#">
            <i className="ph-swap" />
            <span>Transfers</span>
          </a>
          <a href="#">
            <i className="ph-file-text" />
            <span>Templates</span>
          </a>
          <a href="#">
            <i className="ph-globe" />
            <span>SWIFT</span>
          </a>
          <a href="#">
            <i className="ph-clipboard-text" />
            <span>Exchange</span>
          </a>
        </nav>
        
      </div>
      <div className="app-body-main-content">
        <section className="service-section">
          <h2>Service</h2>
          <div className="service-section-header">
            <div className="search-field">
              <i className="ph-magnifying-glass" />
              <input type="text" placeholder="Account number" />
            </div>
            <div className="dropdown-field">
              <select>
                <option>Home</option>
                <option>Work</option>
              </select>
              <i className="ph-caret-down" />
            </div>
            <button className="flat-button">Search</button>
          </div>
          <div className="mobile-only">
            <button className="flat-button">Toggle search</button>
          </div>


   
          <div className="tiles">
 
         
          </div>
          <div className="service-section-footer">
            <p>
              Services are paid according to the current state of the currency and
              tariff.
            </p>
          </div>
        </section>

        {/* //lina partie kwaret */}
      </div>
      <div className="app-body-sidebar">
        <section className="payment-section">
          <h2> keryetek</h2>
          <div className="payment-section-header">
            <p>inchallah 5iiiir </p>
            <div>
            
            </div>
          </div>
          <div className="payments">
            <div className="payment">
              <div className="card green">
                <span>01/22</span>
                <span>•••• money</span>
              </div>
              <div className="payment-details">
                <h3>kerya 1</h3>
                <div>
                  <span>$ 2,110</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </button>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="card olive">
                <span>12/23</span>
                <span>•••• 2228</span>
              </div>
              <div className="payment-details">
                <h3>kerya 2</h3>
                <div>
                  <span>$ 5,621</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </button>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="card gray">
                <span>03/22</span>
                <span>•••• 5214</span>
              </div>
              <div className="payment-details">
                <h3>kerya 3</h3>
                <div>
                  <span>$ 3,473</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq">
            <p>any probleme ask</p>
            <div>
              <label>Question</label>
              <input type="text" placeholder="Type here" />
            </div>
          </div>
          <div className="payment-section-footer">
            <button className="save-button">Save</button>
            <button className="settings-button">
              <i className="ph-gear" />
              <span>More settings</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Client
