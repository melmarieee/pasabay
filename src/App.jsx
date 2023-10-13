import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Account from "./components/account";
import Inbox from "./components/inbox";
import Rides from "./components/rides";
import RideHistory from "./components/RideHistory";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
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