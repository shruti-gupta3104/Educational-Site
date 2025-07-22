import React from 'react'
import "./Home.css";
import Heading from '../component/Heading';
import { useNavigate } from 'react-router-dom';
import About from './About';

const Home = () => {
    const navi = useNavigate();
  
  return (
    <div>
        <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO WORLD OF STUDY' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              <button  onClick={()=>{navi("/course");}}>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />

      <About />

    </div>
  )
}

export default Home
