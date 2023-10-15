import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Navbar from "./components/common/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Account from "./components/account";
import Inbox from "./components/inbox";
import Rides from "./components/rides";
import RideHistory from "./components/RideHistory";
import Footer from "./components/common/footer";



function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/navbar",
      element: <Navbar/>,
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
        <Navbar/>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App