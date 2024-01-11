

import {
 
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    
  } from "@material-tailwind/react";
  import {
  
      UserCircleIcon,
    
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Icon from "./Icon";
   
  export function DefaultSidebar() {
    return (
      <Card  className="h-[calc(100vh-2rem)]  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
         <List>
       
          <img  className="rounded-full h-36 w-36" src="/qwe.jpg" alt="My photo"></img>
        
         </List>

        </div>
        <List>
        <Link to='/' className="flex">
         
          <ListItem >
          
            
          <ListItemPrefix className="-mt-1.5">
          <UserCircleIcon className="h-7 w-7" />
            </ListItemPrefix>
         
      
           
        About me
       
          </ListItem>
          </Link>
          

          <Link  className=" flex " to="hobby"> 
            <ListItem >
            
       
            <ListItemPrefix className="-mt-1.5">
            {/* <svg width="33" height="33" xmlns="https://thenounproject.com/browse/icons/term/hobbies/" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  
            <circle cx="12" cy="12" r="8" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="12" y1="7" x2="12" y2="17" /></svg>


   */}

<img width="30" height="30" src="https://img.icons8.com/external-outline-wichaiwi/64/external-hobby-work-from-home-outline-wichaiwi.png" alt="external-hobby-work-from-home-outline-wichaiwi"/>
            </ListItemPrefix>
            Hobbies  
            <ListItemSuffix>
              
            </ListItemSuffix>
           
          </ListItem>
          </Link>


          <Link  className=" flex" to="project"> 
          <ListItem>

         
            <ListItemPrefix className="-mt-1.5">
            <svg width="33" height="33" xmlns="https://thenounproject.com/browse/icons/term/hobbies/" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  
            <circle cx="12" cy="12" r="8" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="12" y1="7" x2="12" y2="17" /></svg>
            </ListItemPrefix>
            Projects  
            <ListItemSuffix>
              
            </ListItemSuffix>
           
          </ListItem>
          </Link>

          <Link to='profile'>
          <ListItem>
            <ListItemPrefix className="ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" width="27" height="27">
                <path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>
            

            </ListItemPrefix>

           Work
         </ListItem>
         </Link>

         
         
        </List>
        <div  className="pt-8">
        <Icon />
        </div>
    
 
      </Card>



    );
  }