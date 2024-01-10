import React from 'react';

function ProjectCard ({ title, description, link, image }){
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="mb-4 w-full h-32 object-cover rounded-md" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;