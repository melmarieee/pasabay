import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Navbar from "./components/common/navbar";
import Login from "./components/login";
import Signup from "./components/signup";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>
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