import React from 'react'

function ResumeCard(props) {
    return (
        <div>
            <div>
                <div className='flex justify-between sm:flex-row flex-col'>
                <h3 className='text-xl font-semibold'>{props.position}</h3>
                <div className='text-sm my-2'>
                    {props.from} - {props.to}
                </div>
                </div>
                <p>{props.company} {props.location}</p>
            </div>
            <details>
            <summary>what I did...</summary>
            <ul className='text-[14px] space-y-2'>
                {
                    props.work.map((item, index) => {
                        return <li className='list-disc' key={index}>{item}</li>
                    })
                }
            </ul>
            </details>
        </div>
    )
}

export default ResumeCard