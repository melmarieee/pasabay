import React from 'react'
import { History } from './HistoryArray'
import { Link } from 'react-router-dom'

const RideHistory = () => {
  return (
    <>
    <section className="tripHeading-button">
        <Link to='/rides' className='tripLink'>
        <h2 className='trips'>My Trips</h2>
        </Link>
        <h2 className='history'>Ride  History</h2>
    </section>
    <section className="tripContainer">
        {History.map((rideHistory) =>{
            return <HistoryRide {...rideHistory}/>
        })}
    </section>
    </>
  )
}

const HistoryRide = ({Address, Date, Time, Amount}) =>{
    return(
        <>
        <section className="tripContainerGrid">
            <section className="TripContent">
                <i class="fa-solid fa-van-shuttle"></i>
                <p>{Address}</p>
                <p>{Date}</p>
                <p>{Time}</p>
                <p>{Amount}</p>
            </section>
            <section className="button">
                <button className='bookAgain'>Book Again</button>
            </section>  
        </section>
        </>
    )
}

export default RideHistory