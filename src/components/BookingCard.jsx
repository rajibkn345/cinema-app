import React,{useState} from 'react'
import ShowCard from "./ShowCard"

const BookingCard =  ({cinema})=> {
  console.log({cinema});
  return (
    <div className='bookingcard'>
        <h3>{cinema.title}</h3>
        <img src={cinema.image} alt={cinema.title} width="300px" height="400px"/>
        <p>{cinema.duration}</p>
        <p>{cinema.shows.map((show,i)=><div style={{display:'flex',gap:'20px'}} key={i}><span>{show.room}</span><span>{show.time}</span>
        <div style={{margin:'5px'}}>{show.seats.map((seat,i)=><ShowCard seat={seat} key={i}/>)}</div></div>)}</p>
    </div>
  )
}

export default BookingCard