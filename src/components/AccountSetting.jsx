import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./common/navbar";
import "../css/accountSetting.css";

const AccountSetting = () => {
  return (
    <>
      <NavBar />
      <body className="body">
        <div className="container text center">
          <div className="row">
            <div className="col">
              <Link to="/account" className="aboutLink">
                <h2 className="about">About you</h2>
              </Link>
            </div>
            <div className="col">
              <h2 className="account">Account Setting</h2>
            </div>
          </div>
        </div>
        <section className="about-setting"></section>
        <hr />
        <section className="settings">
          <ul className="listFLex">
            <li className="list">
              <p>Password</p>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <p>Privacy Policy</p>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <p>Help Centre</p>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <p>Emergency Contact</p>
              <i class="fa-solid fa-angles-right"></i>
            </li>
          </ul>
        </section>
        <hr />
        <button type="button">Logout</button>
      </body>
    </>
  );
};

export default AccountSetting;
