import { Link } from 'gatsby'
import React from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


function ProjectCard(props) {
    return (
        <div className='space-y-4 mb-8'>
            <div>
                <h1 className='text-[1.75rem] font-medium'>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <Link
                to={props.link}
                target='_blank'
                className='block'>
                <button className='btn bg-white text-black'>Open</button>
            </Link>
        </div>
    )
}

export default ProjectCard