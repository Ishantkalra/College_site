import React from 'react'
import './About.css';
import about_img from '../../src/assets/about.png'
import play_icon from '../../src/assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt=""   className='play-icon'/>
      </div>

      <div className="about-right">
     <h3>ABOUT UNNIVERSITY</h3>
     <h2>Nurturing Tommorow's Leaders Today</h2>
     <p>Our university website serves as the digital gateway to our academic community, providing a comprehensive overview of our institution's mission, values, and offerings. At the heart of our website is a commitment to accessibility, transparency, and engagement. Here, visitors can explore our diverse academic programs, cutting-edge research initiatives, and vibrant campus life. Whether you're a prospective student, a current member of our university community, or an alumni, our website is designed to provide you with the information and resources you need to thrive in your academic journey.</p>
     <p>Our university takes pride in its commitment to academic excellence and innovation. On our website, you'll find detailed information about our range of undergraduate, graduate, and professional programs across various disciplines. From business and engineering to the arts and sciences, we offer a dynamic learning environment that fosters intellectual curiosity and personal growth. Additionally, visitors can learn about our renowned faculty members, their groundbreaking research, and the opportunities for collaboration both within and beyond the classroom.</p>
     <p>Beyond academics, our university website is a hub for community engagement and campus life. From student organizations and cultural events to athletics and volunteer opportunities, there's something for everyone to get involved in. Our website also provides access to support services, including academic advising, counseling, and career development resources, ensuring that every member of our community has the support they need to succeed. Through our website, we aim to cultivate a sense of belonging and connection among all members of our university family.</p>
      </div>
    </div>
  )
}

export default About
