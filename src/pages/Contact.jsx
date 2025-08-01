import React from 'react';
import "./contact.css"
import Heading from '../component/Heading';

const Contact = () => {
  return (
    <div>
      <Heading subtitle='WELCOME TO WORLD OF STUDY' title='Best Online Education Expertise' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Punjab, India</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> infoxxxx@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91XXXXXXX</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
