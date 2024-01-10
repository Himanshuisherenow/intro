import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout' 
import About, { githubInfoLoader } from './components/About'
import Project from './components/Project'



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

<Route  path='' element={<Project/>}></Route>
<Route loader={githubInfoLoader} path='about' element={<About/>}></Route>
      
     {/* 
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route> */}
  
      {/* <Route loader={githubInfoLoader} path='github' element={<Github/>}></Route> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router = {router}/> 


  </React.StrictMode>,
)
