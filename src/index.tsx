import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Greeting from './pages/Greeting';
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments"

const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Greeting/>
      },
      {
        path: 'users',
        element: <Users/>
      },
      {
        path: 'posts',
        element: <Posts/>
      },
      {
        path: 'comments',
        element: <Comments/>
      }
    ]

  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />  
);

