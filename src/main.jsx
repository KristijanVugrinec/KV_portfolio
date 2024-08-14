import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './components/Contact.jsx';
import SkillsInfo from './components/SkillsInfo.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/contact",
    element: <Contact />
  },
  {
    path:"skills",
    element: <SkillsInfo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
