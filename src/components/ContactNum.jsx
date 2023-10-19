import React, { useState } from "react";
import Navbar from "../components/common/navbar";
import "../css/contactnum.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
          <h1>Phone Number Verification</h1>

          <div className="container text center">
            <div className="row">
              <div className="col">
                <img src="../src/assets/Contact us.gif" alt="" />
              </div>
              <div className="col container-phone">
                <label className="labelInput">
                  Phone Number:
                  <PhoneInput
                    country={"ph"}
                    value={PhoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      required: true,
                    }}
                  />
                  <button type="submit">Verify</button>
                </label>
                {!valid && (
                  <p className="error-message">
                    Please enter a valid phone number!
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default ContactNum;
