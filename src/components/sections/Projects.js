import React from 'react'
import ProjectCard from '../ProjectCard';


const projects = [
    {
        title: 'Bnbb',
        link: 'https://guest-suite.vercel.app/',
        desc: 'On this project, I replicated the airbnb build. In this showcase, I utilize several complex components, animations and responsive techniques to make it suitable for all devices',
        tags: ['React', 'Tailwindcss']
    },
    {
        title: 'Lede',
        link: 'https://lede.vercel.app/',
        desc: 'Keep track of current events that matter to you. Clean minimal and straight to the point news aggregation.',
        tags: ['React', 'Tailwindcss']
    },
    {
        title: 'Omnis-zen',
        link: 'https://omnis-zen.vercel.app/',
        desc: 'A just for the day todo list. Knock out your tasks with a simple minimal todo list and forget about them the next day.',
        tags: ['NextJS', 'React', 'Tailwindcss']
    },
]
function Projects() {
    return (
        <div className='space-y-4 w-full'>
            {
                projects.map((item, index) => {
                    return <ProjectCard
                        title={item.title}
                        link={item.link}
                        desc={item.desc}
                        tags={item.tags}
                    />
                })
            }
        </div>
    )
}

export default Projects