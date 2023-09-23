import React from 'react'

const CinemaCard = ({cinema}) => {
  console.log({cinema});
  return (
    <div className='card'>
        <h3>{cinema.title}</h3>
        <img src={cinema.image} alt={cinema.title} height="300px" width={'220px'} />
        <p>{cinema.duration}</p>
    </div>
  )
}

export default CinemaCard