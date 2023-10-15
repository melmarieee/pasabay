import React from 'react'
import { Link } from 'react-router-dom'

const AccountSetting = () => {
  return (
    <>
    <section className="about-setting">
        <Link to='/account'>
        <h2 className='about'>About you</h2>
        </Link>
        <h2 className='account'>Account Setting</h2>
    </section>
    <section className="settings">
        <p>Notifications, emails & SMS</p>
        <p>Password</p>
        <p>Payment Method</p>
        <p>Payment & Refunds</p>
        <p>Privacy Policy</p>
        <hr />
        <p>Log out</p>
    </section>
    </>
  )
}

export default AccountSetting