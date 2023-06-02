import React from 'react'
import "./Summary.css"
import BookingModal from '../BookingModal/BookingModal'

function Summary(props) {

  const appendModal = ()=>{
    const overlay= document.getElementsByClassName("overlay")[0]
    overlay.style.display = "block"
  }

  return (
    <div className='summary' key={props.id} >
      <h1 className='s-head'>{`The Summary of "${props.name}"`}</h1>
      <p>{props.summary}</p>
      <BookingModal name={props.name}/>

      <button onClick={appendModal}>Book Ticket</button>
    </div>
  )
}

export default Summary
