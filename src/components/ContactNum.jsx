import React, { useState } from "react";
import Navbar from "../components/common/navbar";
import "../css/contactnum.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Label, Button, FormGroup } from "reactstrap";
import Footer from '../components/common/footer'

const ContactNum = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const PhoneNumberPattern = /^\d{12}$/;
    return PhoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <Navbar />
      <body className="body">
        <section className="verify-contact">
          <div className="container text center">
            <div className="row">
              <div className="col image-contact">
                <img
                  src="../src/assets/Contact us.gif"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col">
                <Label className="contactHeading">
                  <h1>Phone Number Verification</h1>
                </Label>
                <FormGroup className="formContact">
                  <Label className="labelInput">
                    Phone Number:
                    <PhoneInput
                      className="inputNumber"
                      country={"ph"}
                      value={PhoneNumber}
                      onChange={handleChange}
                      inputProps={{
                        required: true,
                      }}
                    />
                    {!valid && (
                      <p className="error-message">
                        Please enter a valid phone number!
                      </p>
                    )}
                    <Button type="submit" className="btnContact">Verify</Button>
                  </Label>
                </FormGroup>
              </div>
            </div>
          </div>
        </section>
      </body>
      <Footer/>
    </>
  );
};

export default ContactNum;
