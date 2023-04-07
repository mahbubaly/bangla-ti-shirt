import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layouts/Main';
import Order from './Component/Order/Order';
import Check from './Component/Check/Check';
import Home from './Component/Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('tiShirts.json'),
      },
      {
        path: '/order',
        element: <Order/>
      },
      {
        path: '/check',
        element: <Check />
      },
      {
        path: '/signIn',
        element: <Check />
      },
      {
        path: '/signOut',
        element: <Check />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
