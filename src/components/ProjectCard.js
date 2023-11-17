import { Link } from 'gatsby'
import React from 'react'



function ProjectCard(props) {
    return (
        <div className='flex items-center gap-4 bg-white/10 bg--blur p-2 rounded-md'>
            {/* <div className='aspect-video basis-1/6'>
                <img src='/images/hostshare.png' />
            </div> */}
            <div className='grow'>
                <h2 className='text-2xl font-bold my-1'>
                    <Link to={props.link} target='_blank'>{props.title}</Link>
                </h2>
                <p>{props.desc}</p>
                <div className='tag-list flex items-center gap-2 bg-white/10 w-fit px-1 rounded-md'>
                    {
                        props.tags.map((item, index) => {
                            return <>
                                <div className='flex items-center gap-2'>
                                    {item}
                                </div>
                                <span className='block w-1 aspect-square bg-white rounded-full'></span>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard