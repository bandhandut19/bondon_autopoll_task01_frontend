import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Home/Login/Login';
import UseridProvider from './Components/Providers/UseridProvider';
import AutoPoll from './Components/AutoPoll/AutoPoll';
import ErrorPage from './Components/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/autopoll',
        element: <AutoPoll></AutoPoll>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseridProvider>
      <RouterProvider router={router} />
    </UseridProvider>


  </React.StrictMode>,
)
