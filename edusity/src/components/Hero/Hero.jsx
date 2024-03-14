import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>
With a wealth of resources at your fingertips, unleash your potential and thrive in your educational endeavors. Our platform is designed to support your journey towards excellence, every step of the way. Join us today and transform your passion for learning into tangible achievements.
</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

      </div>
    </div>
  )
}

export default Hero
