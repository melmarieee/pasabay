import React from "react";
import NavBar from "../components/common/navbar";
import { FormGroup, Label, Input, Button  } from "reactstrap";
import '../css/password.css'
import Footer from "../components/common/footer"

const Password = () => {
  return (
    <>
      <NavBar />
      <body className="body">
        <section>
          <div className="row">
            <div className="col-5">
              <img src="../src/assets/security On (2).gif" alt="" className="img-fluid" />
            </div>
            <div className="col-7 px-5" id="password-container">
              <Label className="formHeading"><h1>Change Password</h1></Label>
              <FormGroup className="formInput">
                <Label>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</Label>
                <Input type="text" placeholder="Current password" className="inputForm"/>
                <Input type="text" placeholder="New password" className="inputForm"/>
                <Input type="text" placeholder="Confirm new password"className="inputForm"/>
                <Button type="submit" className="formButton">Change Password</Button>
              </FormGroup>
            </div>
          </div>
        </section>
      </body>
      <Footer/>
    </>
  );
};

export default Password;