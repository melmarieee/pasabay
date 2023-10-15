import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
import Inbox from "./components/inbox";
import Rides from "./components/rides";
import RideHistory from "./components/RideHistory";
import Footer from "./components/common/footer";
import AccountSetting from "./components/AccountSetting";
import CarPool from './components/carpool';


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
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>
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
      path:"/footer",
      element: <Footer/>
    },
    {
      path:"/accountSetting",
      element: <AccountSetting/>
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