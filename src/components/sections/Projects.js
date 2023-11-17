import React from 'react'
import ProjectCard from '../ProjectCard';


const projects = [
    {
        title: 'Hostshare UI',
        link: 'https://hostshare-ochre.vercel.app/',
        desc: 'On this project, I replicated the airbnb build. In this showcase, I utilize several complex components, animations and responsive techniques to make it suitable for all devices',
        tags: ['React', 'Tailwindcss']
    },
    {
        title: 'Lede',
        link: 'https://lede.vercel.app/',
        desc: 'Keep track of current events that matter to you. Clean minimal and straight to the point news aggregation.',
        tags: ['React', 'Tailwindcss']
    },
]
function Projects() {
    return (
        <div className='max-w-5xl mx-auto space-y-4 w-full'>
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