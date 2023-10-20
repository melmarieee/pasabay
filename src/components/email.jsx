import React, { useState } from "react";
import NavBar from "../components/common/navbar";
import "../css/email.css";
import { FormGroup, Label, Input, Button } from "reactstrap";
import Footer from '../components/common/footer'

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
        <div className="container text center">
          <div className="row">
            <div className="col">
              <div className="img-container">
                <img src="../src/assets/Email campaign.gif" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col">
                <Label className="labelHeading">
                  <h1>Email Confirmation</h1>
                </Label>
              <FormGroup className="formEmail">
                <Input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={handleOnChange}
                />
                <Button onClick={emailValidation} className="btnEmail">Confirm</Button>
                <Label className="message">{message}</Label>
              </FormGroup>
            </div>
          </div>
        </div>
      </body>
      <Footer/>
    </>
  );
};

export default Email;
