import React from 'react'

const CardComponent = ({title, imageUrl, 
    desctiption, imageAlt}) => {
  return (
    <div class="card h-100 shadow">
        <img 
        src={imageUrl}
        alt={imageAlt}
        className="card-img-top"
        style={{height: '200px', objectFit: 'cover'}}
        ></img>
        <div className="card-body d-flex flex-column">
            <div className="card-title">{title}</div>
            <p className="card-text">{desctiption}</p>
        </div>

    </div>
  )
}

export default CardComponent
