import React from 'react'
import { MyTrips } from './MyTripsArray'
import { Link } from 'react-router-dom'
import '../css/rides.css'

const Rides = () => {
  return (
    <>
    <section className="tripHeading-button">
        <h2 className='trips'>My Trips</h2>
        <Link to='/rideHistory' className='historyLink'>
            <h2 className='history'>Ride History</h2>
        </Link>
    </section>
    <section>
        <h3 className='tripHeader'>Trip Details:</h3>
    </section>
    <section className="tripContainer">
        {MyTrips.map((myTrip) =>{
            return <Trips {...myTrip}/>
        })}
    </section>
    </>
  )
}

const Trips = ({Address, Date, Time, Amount}) =>{
    return(
        <section className="TripContent">
            <i class="fa-solid fa-van-shuttle"></i>
            <p>{Address}</p>
            <p>{Date}</p>
            <p>{Time}</p>
            <p>{Amount}</p>
        </section>
    )
}
export default Rides