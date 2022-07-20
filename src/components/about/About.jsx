import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'



const About = () => {
  return (
    <section id='about'>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>



        </div>
    </section>
  )
}

export default About
