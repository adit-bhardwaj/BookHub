import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BOOK_HUB is created for the ease of the user to search any book and read about its descripyions</p>
            <p className='fs-17'>It helps user to search for books that they like...</p>
            <p className='fs-17'></p>
            <h2 className='about-title fs-26 ls-1'>Sources</h2>
            <p className='fs-17'>ReactApp is majorly used in our website</p>
            <p className='fs-17'>Api documentation was used in help of OPENLIBRARY.ORG</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
