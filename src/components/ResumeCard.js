import React from 'react'

function ResumeCard(props) {
    return (
        <div>
            <div className='space-y-1 pb-4'>
                <div className='flex gap-4 items-center sm:flex-row flex-col'>
                    <h2 className='font-semibold'>{props.company}</h2>
                </div>
                <p className='text-sm text-white/70'>{props.position}, {props.from} - {props.to}</p>
            </div>
            <ul className='space-y-2 pl-4'>
                    {
                        props.work.map((item, index) => {
                            return <li className='' key={index}>{item}</li>
                        })
                    }
            </ul>
            {/* <details>
                <summary className='text-[14px] cursor-pointer'>what I did...</summary>
                <ul className='text-[14px] space-y-2'>
                    {
                        props.work.map((item, index) => {
                            return <li className='' key={index}>{item}</li>
                        })
                    }
                </ul>
            </details> */}
        </div>
    )
}

export default ResumeCard