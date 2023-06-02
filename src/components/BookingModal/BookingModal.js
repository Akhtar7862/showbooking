import React, {useState, useEffect} from "react";
import "./BookingModal.css";

export default function BookingModal(props) {
    const [user, setUser]= useState({name: "", email: ""})
    const [defaultname, setDefaultname]= useState('')
    const [defaultemail, setDefaultemail]= useState('')


    const userDetails = ()=>{
        setDefaultname(localStorage.getItem("name")===null?"":localStorage.getItem("name")) 

        setDefaultemail(localStorage.getItem("email")===null?"":localStorage.getItem("email"))
    }
    useEffect(()=>{
        userDetails()
          
    },[])

    const closeModal = ()=>{
        const overlay= document.getElementsByClassName("overlay")[0]
        overlay.style.display = "none"
    }

    const handlecChange= (e)=>{
        setUser({ ...user, [e.target.name]: e.target.value })
      }

      const handleSubmit = (e)=>{
          e.preventDefault();
          const overlay= document.getElementsByClassName("overlay")[0]
            localStorage.setItem("name", user.name)
            localStorage.setItem("email", user.email)
            overlay.style.display = "none"
      }

      
  return (
    <div className="overlay">
      <div className="bookingModal">
        <div className="modalhead">
        <h1>Booking</h1>
        <span className="close" onClick={closeModal}>&times;</span>
        </div>

        <div className="container">
            <label htmlFor="showName"><b>Show Name:</b></label>
            <input type="text" id="showName" value={props.name} readOnly={true} />
        </div>

        <div className="container">
            <label htmlFor="fullName"><b>Your Full Name:</b></label>
            <input type="text" id="fullName" name="name" onChange={handlecChange} defaultValue={defaultname.toString()} placeholder="Enter Your Full Name" />
        </div>

        <div className="container">
            <label htmlFor="email"><b>Email Address:</b></label>
            <input type="email" id="email" name="email" onChange={handlecChange} defaultValue={defaultemail.toString()} placeholder="Enter Your Email Address" />
        </div>

        <div className="container">
            <label htmlFor="date"><b>Date:</b></label>
            <input type="date" placeholder="Enter Date" />
        </div>

        <div className="container">
            <label htmlFor="time"><b>Time:</b></label>
            <input type="time" placeholder="Enter Time"/>
        </div>

        <button onClick={handleSubmit}>Submit</button>

      </div>
    </div>
  );
}
