
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";


const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children:[
      {
         
    index:true,
    Component: Home,
  },
   {
  path:'about',
  Component: About,
  }
      
    ]
  },
 
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);