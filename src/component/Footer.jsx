import React from "react"

import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Shruti</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small team that is developing and growing.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul >
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/course'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          </div>
          
         
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Punjab,India
              </li>
              <li>
                <i className='fa fa-phone'></i>
                +91xxxxxxx
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                infoxxxx@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <code>
          Copyright ©2025 All rights reserved |  Made with <i className='fa fa-heart'></i> by Shruti
        </code>
      </div>
    </>
  )
}

export default Footer
