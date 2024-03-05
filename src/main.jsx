import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './Pages/home/index.jsx';
import About from './Pages/About/index.jsx';
import Project from './Pages/Project/index.jsx';
import Resume from './Pages/Resume/index.jsx';


const router = createBrowserRouter([{
  element: <App />,
  children:[
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <About />
    },{
      path: '/project',
      element: <Project />
    },{
      path: '/resume',
      element: <Resume />
    },
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
