import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout' 
import About from './components/About'
import About1 from './components/About1.jsx'
import Detail from './about/Detail.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

<Route  path='' element={<About1/>}></Route>
    
<Route path='hobby' element={<About/>}></Route>
<Route path='project' element={<Detail/>}></Route>
      
     {/* 
     
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
