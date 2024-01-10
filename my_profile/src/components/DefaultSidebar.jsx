

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
      <Card  className="h-[calc(100vh-2rem)] sticky w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
         <List>
         <Link to="data:image/jpeg;base64,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">
         <img  className="rounded-full h-36 w-36" src="data:image/jpeg;base64,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" alt="My photo"></img>
</Link>
         
         </List>

        </div>
        <List>
        <Link to='/about' className="flex ">
         
          <ListItem >
          
            
          <ListItemPrefix className="-mt-1.5">
          <UserCircleIcon className="h-7 w-7" />
            </ListItemPrefix>
         
      
           
        About
       
          </ListItem>
          </Link>
          

          <Link  className=" flex " to=""> 
            <ListItem >
            
       
            <ListItemPrefix className="-mt-1.5">
            <svg width="33" height="33" xmlns="https://thenounproject.com/browse/icons/term/hobbies/" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  
            <circle cx="12" cy="12" r="8" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="12" y1="7" x2="12" y2="17" /></svg>
            </ListItemPrefix>
            Hobbies  
            <ListItemSuffix>
              
            </ListItemSuffix>
           
          </ListItem>
          </Link>


          <Link  className=" flex" to=""> 
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

          <Link to=''>
          <ListItem>
            <ListItemPrefix className="ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" width="27" height="27">
                <path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>
            

            </ListItemPrefix>

            Profile
         </ListItem>
         </Link>

          <ListItem>
            <Link to="" >
            <ListItemPrefix className="-mt-1.5">
            </ListItemPrefix>
            Settings
            </Link>
          </ListItem>
         
        </List>

      <Icon/>
 
      </Card>



    );
  }