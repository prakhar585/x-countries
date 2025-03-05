import React from 'react'
import './Card.css';

const Card = ({mapObj}) => {
  
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={mapObj.flag} alt={mapObj.abbr} />
      </div>
      <div className='card-title'>{mapObj.name}</div>
    </div>
  )
}

export default Card
