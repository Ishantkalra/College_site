import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Tiltle1 from './title/Tiltle1'
import About from './about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tiltle1 subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Tiltle1 subTitle='GALLERY' title='Explore Our Campus'/>
      <Campus />
      <Tiltle1 subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials />
      <Tiltle1 subTitle='CONTACT US' title='Get in Touch'/>
      <Contact />
<Footer/>
      </div>

    </div>
  )
}

export default App
