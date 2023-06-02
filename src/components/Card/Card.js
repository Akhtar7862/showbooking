import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom";



function Card(props) {

  return (
    <div className='card' key={props.id}>
      <h3 className='cardheading'>{props.name}</h3>
      <img src={props.image} alt="The American" />
      <div className="premon">premired on <span className="green">{props.prem}</span></div>
      <span className='status'>{props.status}</span>

      <span className="rating">Rating: <span className="green">{props.rating==null? "Unavailable": props.rating}</span></span>
      <Link to={`/${props.id}`}>Summary</Link>
    </div>
  )
}

export default Card
