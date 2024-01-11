
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Qoute Generator',
    description: 'A simple quote generator.',
    link: 'https://himanshuisherenow.github.io/Qoute_generator/',
    image: "./src/project/image/q.png",
  },
  {
    title: 'Todo App',
    description: 'A simple todo application.',
    link: 'https://todo-app-tau-nine-70.vercel.app/',
    image: './src/project/image/t.png',
  },
  {
    title: 'Bubble Game',
    description: 'A fun bubble-popping game.',
    link: 'https://himanshuisherenow.github.io/bubblegame/',
    image: './src/project/image/b.png',
  },
];

function Portfolio ()  {
  return (<>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} /> // i can also assign id's
        ))}
      </div>
    </div>
   
   </>
  );
};

export default Portfolio;
