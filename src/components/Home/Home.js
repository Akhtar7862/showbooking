import React, {useState, useEffect} from 'react'
import "./Home.css"
import Card from '../Card/Card'

function Home() {
 const [info, setInfo]= useState([])

 useEffect(()=>{
    fetchdata()
 },[])

    const fetchdata = async()=>{
        const url= "https://api.tvmaze.com/search/shows?q=all"
        const data= await fetch(url)
        const parsedData= await data.json()
        setInfo(parsedData)
    }
  return (
    <div className='home'>
        {info.map((item)=>{
            return <Card name={item.show.name} image={item.show.image.medium} prem={item.show.premiered} status= {item.show.status} rating={item.show.rating.average} id={item.show.id} key={item.show.id}/>
        })}
      
    </div>
  )
}

export default Home
