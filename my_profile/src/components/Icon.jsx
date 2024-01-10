import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Icon() {
  return (

    <div className="flex ml-4 gap-7">

      
      <a href="https://twitter.com/Himansh788o" target="_blank">

      <IconButton className="rounded bg-black hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
        
        <i className="fab fa-twitter text-lg" />
      
      </IconButton>
</a>


      <a href="http://www.linkedin.com/in/himanshuchavda" target="_blank">
        
      <IconButton className="rounded bg-light-blue-800 hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
        <i className="fab fa-linkedin text-lg" />
      </IconButton>
      </a>



      
      <a href="https://github.com/Himanshuisherenow " target="_blank">
      <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-github text-lg" />
      
      </IconButton>
      </a>
    </div>
  );
}

  


export default Icon