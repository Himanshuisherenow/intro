
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Qoute Generator',
    description: 'A simple quote generator.',
    link: 'https://himanshuisherenow.github.io/Qoute_generator/',
    image: "./src/about/q.jpg",
  },
  {
    title: 'Todo App',
    description: 'A simple todo application.',
    link: 'https://todo-app-tau-nine-70.vercel.app/',
    image: './src/about/todo.jpg',
  },
  {
    title: 'Bubble Game',
    description: 'A fun bubble-popping game.',
    link: 'https://himanshuisherenow.github.io/bubblegame/',
    image: './src/about/bubble.jpg',
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
    <div>

      <img src="https://drive.google.com/drive/folders/16APjr0zKNnLLOXqlbq9Fe3aS_qUbdASr/q.png"/>
    </div>
   </>
  );
};

export default Portfolio;
