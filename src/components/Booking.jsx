import React,{useState,useEffect} from "react";
import BookingCard from "./BookingCard"


const Booking = ()=>{
    
    const [cinemaData, setCinemaData] = useState(null);

    // state to track if application is loading
    const [loading, setLoading] = useState(true);
  
    // state to track any error message
    const [error, setError] = useState(null);
  
    // trigger the arrow function inside useEffect ONE time before loading
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/cinema.json');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          console.log({data});
          setCinemaData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // check if loading, if true then we should display a loading message
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // check if there is an error, if true then we should display it
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <div className="booking">
      <h2 style={{textAlign:'center',color:'white',padding:'30px'}}>Welcome to Booking</h2>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',flexWrap:'wrap'}}>
     { cinemaData && cinemaData.cinema.movies.map((cinema,i)=><BookingCard key={i} cinema={cinema}/>)}
     </div>
     </div>
}
export default Booking