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
import DragDrop from "./components/DragDrop";
import ConfirmationComponent from "./components/ConfirmationComponent";
import ShowRide from './components/show_ride';
import Form from './components/form';


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
      path:"/dragdrop",
      element: <DragDrop/>
    },
    {
      path: "/confirmation",
      element: <ConfirmationComponent />,
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