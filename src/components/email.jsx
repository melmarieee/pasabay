import React, { useState } from "react";
import NavBar from "../components/common/navbar";
import "../css/email.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a,z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email != "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <NavBar />
      <body className="body">
        <div className="email-header">
          <h2>Email Verification</h2>
        </div>
        <div className="container text center">
          <div className="row">
            <div className="col">
              <div className="img-container">
                <img src="../src/assets/Email campaign.gif" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="app">
                <div className="card">
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={handleOnChange}
                  />
                  <button onClick={emailValidation}>Check</button>
                  <p className="message">{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Email;
