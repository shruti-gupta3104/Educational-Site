import React from 'react'
import { cardPageData } from "../data/data"
import "./Card.css";
import { Link, Navigate } from 'react-router-dom';

const Card = () => {
    
    const coursesCard = cardPageData;
  return (
    <div>
       <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val ) => (
            <div className='items' key={val.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details , index) => (
                      < div key={index} >
                        <div className='box' >
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <Link to={`/course/${val.id}`}>
            <button className='outline-btn'>Explore Course</button>
             </Link>


              {/* <button  >Explore Now !</button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Card

//  Add a new " CLAT Crash Course 2026" section with:
// ○ Unique pricing and a limited-time banner
// ○ Features list (e.g., 2 classes per subject, mentorship, mocks, etc.)
// ○ Schedule and start dates
// ○ Easy inquiry or registration form


// Student Testimonials Section
// ● Design a visually appealing testimonial slider or grid.
// ● Include student names, course taken, photos (if available), and short quotes.
// ● Highlight top performer feedback or notable success stories.