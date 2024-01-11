import React from 'react'
function About() {


    return(

        <>
    <div className='  bg-blue-gray-400  w-full'>
 

    <div class="max-w-xl mx-auto">
        <h1 class="text-4xl font-bold font-stonewash  m-8 text-center">My Hobbies</h1>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Tech</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Philosophy</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Psychology</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Dance</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Ancient India History</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Ayurveda</h2>
            </li>

            <li class="hobby-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <h2 class="text-xl font-bold mb-4">Self Help</h2>
            </li>
        </ul>
    </div>
    </div>
        </>
    )
}

export default About