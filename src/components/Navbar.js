import React from 'react'
import PropTypes from 'prop-types'
import { Link,useLocation } from 'react-router-dom'



export default function Navbar(props) {
  
  const location = useLocation()
  
  
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${location.pathname === '/'? 'custom-active' : ' ' }`}>
          <Link className= 'nav-link '    to="/"><b>Home</b></Link>
        </li>
      
        <li className={`nav-item ${location.pathname === '/Contactme'? 'custom-active' : ' ' }`}>
          <Link className='nav-link'  to="/Contactme"><b>Contact me</b></Link>
        </li>
          </ul>
          <div className={`form-check mx-2 text-${props.mode==='dark'? 'light': 'dark'}`}>
      <input className="form-check-input" name='box1'  
       type="checkbox" onClick={props.togglemode} value="" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
       Enable Dark Mode
       </label>
          </div>
                
    </div>
  </div>
</nav>
    
  )
}

  
  
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    }
Navbar.defaultProps ={
    title : 'Your title here' ,
    }