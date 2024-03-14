import React from 'react'
import './Tiltle1.css';

const Tiltle1 = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
      
    </div>
  )
}

export default Tiltle1
