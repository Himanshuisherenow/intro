import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function About1() {
  return (
    <section className= 'bg-blue-gray-800'>
      

<div className='m-7'>

  <div className='flex justify-center font-sans font-extrabold align-middle text-center'>
    <TypeAnimation className='font-serif mb-7 text-7xl text-pink-300'
      sequence={[
       
        "Web Devlopment",
        1000,
        "Frontend Devloper",
        1000,
        "Backend Devloper",
        1000,
        "Computer Networks learner",
        1000,
        "Interested in security "
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>

  
<h1 className='font-serif mb-7  ml-3 text-7xl text-teal-500  font-montserrat'>Himanshu</h1>

<p className='text-2xl text-teal-200 font-montserrat'>Hi, I'm Himanshu Chavda, an aspiring web developer passionate about creating digital experiences. From coding intuitive user interfaces to building robust backend systems, I'm on a continuous learning journey. Excited to contribute my skills to meaningful projects, I'm eager to connect and explore opportunities to make a positive impact through technology.

</p>


<p className='mt-6 text-2xl text-teal-200'>
Currently in my 5th semester at VGEC, studying computer engineering. Embracing advanced topics and thriving in VGEC's innovative academic environment.
</p>

</div>
   


    </section>
   


    
    
    
  
    
    
    ) 
}

export default About1