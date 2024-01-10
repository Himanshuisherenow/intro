import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout' 
import About from './components/About'
import About1 from './components/About1.jsx'
import Portfolio from './about/Portfolio.jsx'
import Profile from './profile.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

<Route  path='' element={<About1/>}></Route>
    
<Route path='hobby' element={<About/>}></Route>
<Route path='project' element={<Portfolio/>}></Route>
      
  
     
      <Route path='profile' element={<Profile/>}></Route> 
  

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router = {router}/> 


  </React.StrictMode>,
)
