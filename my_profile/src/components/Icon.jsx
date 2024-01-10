import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Icon() {
  return (

    <div className="flex gap-7">

      
      <Link to="https://twitter.com/Himansh788o" target="_blank">

      <IconButton className="rounded bg-black hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
        
        <i className="fab fa-google text-lg" />
      
      </IconButton>
</Link>


      <Link to="http://www.linkedin.com/in/himanshuchavda" target="_blank">
      <IconButton className="rounded bg-light-blue-800 hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
        <i className="fab fa-twitter text-lg" />
      </IconButton>
      </Link>




      
      <Link to="https://github.com/Himanshuisherenow " target="_blank">
      <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-github text-lg" />
      
      </IconButton>
      </Link>
    </div>
  );
}




export default Icon