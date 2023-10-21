import React from "react";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Login from "./components/login";
import Signup from "./components/signup";
import Forgotpassword from "./components/forgotpassword";
import Account from "./components/account";
import Inbox from "./components/inbox";
import Rides from "./components/rides";
import RideHistory from "./components/RideHistory";
import AccountSetting from "./components/AccountSetting";
import CarPool from './components/carpool';
import ContactNum from "./components/ContactNum";
import Email from "./components/email";
// import DragDrop from "./components/DragDrop";
import ShowRide from './components/show_ride';
import Form from './components/form';
import Password from "./components/Password";
import Drive from "./components/drive"
import MiniBio from "./components/MiniBio";
import TravelPreference from "./components/TravelPreference";
import EmergencyContact from "./components/EmergencyContact";
import HelpCentre from "./components/HelpCentre";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/carpool",
      element: <CarPool/>,
    },
    {
      path: "/show_ride",
      element: <ShowRide/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/forgotpassword",
      element:<Forgotpassword/>,
    },
    {
      path: "/account",
      element: <Account/>
    },
    {
      path: "/inbox",
      element: <Inbox/>
    },
    {
      path: "/rides",
      element: <Rides/>
    },
    {
      path:"/rideHistory",
      element: <RideHistory/>
    },
    {
      path: "/form",
      element: <Form/>,
    },
    {
      path:"/accountSetting",
      element: <AccountSetting/>
    },
    {
      path:"/contactNumber",
      element: <ContactNum/>
    },
    {
      path:"/email",
      element: <Email/>
    },
    {
      path: "/password",
      element: <Password/>
    },
    {
      path: "/drive",
      element: <Drive/>
    },
    {
      path: "/bio",
      element: <MiniBio/>
    },
    {
      path: "/travel-preference",
      element: <TravelPreference/>
    },
    {
      path: "/emergency-contact",
      element: <EmergencyContact/>
    },
    {
      path: "help-centre",
      element: <HelpCentre/>
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App