import { Link } from 'gatsby'
import React from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


function ProjectCard(props) {
    return (
        <div className='flex items-center gap-4 bg-white/10 bg--blur sm:px-4 px-2 py-2 rounded-md w-full'>
            {/* <div className='aspect-video basis-1/6'>
                <img src='/images/hostshare.png' />
            </div> */}
            <div className='grow space-y-4'>
                <div className='text-2xl my-1 flex justify-between items-center'>
                    <h2>{props.title}</h2>
                    <Link 
                    to={props.link} 
                    target='_blank'
                    className='hover:translate-x-2 duration-300 transition-all'><FaArrowRightLong /></Link>
                </div>
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