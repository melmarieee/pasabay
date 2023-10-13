import React from 'react'
import '../css/account.css'

const Account = () => {
  return (
    <>
    <section className="about-setting">
        <h2 className='about'>About you</h2>
        <h2 className='account'>Account Setting</h2>
    </section>
    <hr />
    <section className="detailsContainer">
    <img src="../src/assets/Images/Logo.png" alt="" />
        <div className="detailsinfo">
            <h4>Name</h4>
            <h4>email</h4>
            <h4>Contact</h4>
        </div>
    </section>
    <hr />
    <section className="validInfoContainer">
        <h2>Verify your profile</h2>
        <div className="validInfo">
            <ul>
                <li>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p> Valid ID</p>
                </li>
                <li>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p> E-mail Address</p>
                </li>
                <li>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p> Contact Number</p>
                </li>
            </ul>
        </div>
    </section>
    <hr />
    <section className="aboutYou">
        <h2>About you</h2>
        <ul>
            <li>
                <i class="fa-solid fa-circle-plus"></i>
                <p> Mini Bio</p>
            </li>
            <li>
                <i class="fa-solid fa-circle-plus"></i>
                <p> Travel Preference</p>
            </li>
        </ul>
    </section>
    </>
  )
}

export default Account