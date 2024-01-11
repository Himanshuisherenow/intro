import React from 'react'

function Profile() {
  return (
    <div>
          <div class="container mx-auto p-8">
     
       

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold font-montserrat mb-4">Frontend Development</h2>
                <p class="text-gray-700">Proficient in <span className='text-blue-gray-900 font-semibold'>HTML</span>, <span className='text-blue-gray-900 font-semibold'>CSS</span>, and <span className='text-blue-gray-900 font-semibold'>JavaScript</span>. Experience with modern frameworks like <span className="text-blue-gray-900 font-semibold">React</span></p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold mb-4">Backend Development</h2>
                <p class="text-gray-700">Skilled in server-side scripting languages such as <span className='text-blue-gray-900 font-semibold'> Node.js</span>. Familiar with databases like <span className='text-blue-gray-900 font-semibold'>MongoDB</span> and<span className='text-blue-gray-900 font-semibold'>SQL</span> .</p>
            </div>

           
        </div>
    </div>
    </div>
  )
}

export default Profile