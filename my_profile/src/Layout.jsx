import './App.css'
import { Outlet } from 'react-router-dom';
import Index from './about/Index'
import { DefaultSidebar } from './components/DefaultSidebar';



function Layout() {
  

  return (
    <>
  <div className='flex justify-normal'>
    <DefaultSidebar />
    <Outlet/>
    </div>
    </>
  
  )
}

export default Layout
