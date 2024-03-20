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
import Login from './Components/Login/Login';
import UseridProvider from './Components/Providers/UseridProvider';
import AutoPoll from './Components/AutoPoll/AutoPoll';
import PracticeTree from './Components/PracticeTree/PracticeTree';
import Tree from './Components/Tree/Tree';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      {
        path: '/practicetree',
        element: <PracticeTree></PracticeTree>
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
