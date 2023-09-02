import React from 'react'

export default function Contactme() {
  return (
    <div className="containercontactme">
        <div className="shape">
            <div className="image"></div>
        </div>
        <h3 >Hassan Ahmad</h3>
        <h3 className="title">Web Developer</h3>
        <p className='contact'>MERN Stack,Grapic designer</p>
        <div className="icons">
        <a href="https://github.com/Hassan1ahmad" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
      </a> &nbsp;

      <a href="https://www.instagram.com/hassanopahmadxd/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
      </a> &nbsp;

      <a href="https://linkedin.com/in/hassan-ahmad-" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a> &nbsp;

      <a href="mailto:hassan1ahmad999@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
      </a>

        </div>
    </div>
  )
}
