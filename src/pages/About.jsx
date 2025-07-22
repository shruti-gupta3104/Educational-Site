import React from 'react'
import "./About.css";
import { homeAbout } from "../data/data";
import Heading from '../component/Heading';
import Testimonial from '../component/Testimonial';
const About = () => {
  return (
    <div>
        <Heading subtitle='WELCOME TO WORLD OF STUDY' title='Best Online Education Expertise' />
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/hero-1-img.png' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val, index) => {
                return (
                  <div className='item flexSB' key={index}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Testimonial />
      </section>
    </div>
  )
}

export default About
