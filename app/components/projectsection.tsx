import React from 'react'
import ProjectCard from './projectcard'
import { title } from 'process'


const projectsData = [
    {
        id: 1,
        title: "Gift Shop",
        description: "Frontend done in Bootstrap",
        image: "/images/p1.jpg",
    },
    {
        id: 2,
        title: "Stock Market Dashboard",
        description: "Frontend done in Angular",
        image: "/images/p2jpg.jpg",
    },
    {
        id: 3,
        title: "AI Chatbot",
        description: "Frontend done in Bootstrap",
        image: "/images/p3jpg.jpg",
    }
];


const Projectsection = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {projectsData.map(project => (
                <ProjectCard
                    key={project.id}
                    imgurl={project.image}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </div>
    )
}

export default Projectsection
