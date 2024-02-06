import React from 'react'
import { Link } from 'gatsby'

const Developers = [
    {
        name: "Lee Rob",
        link: "https://twitter.com/leeerobbrave"
    },
    {
        name: "Olivier Larose",
        link: "https://twitter.com/olivierlarose_"
    },
    {
        name: "Rafat Pastuszak",
        link: "https://sonnet.io/"
    },
    {
        name: "Yuya Uzu",
        link: "https://twitter.com/uzu1989"
    },
    {
        name: "Amelia Wattenberger",
        link: "https://wattenberger.com/"
    }
]

function InspirationalDevs() {
    return (
        <div className='space-y-1'>
            {
                Developers.map((item, index) => {
                    return <Link
                        target='_blank'
                        className='hover:underline block'
                        to={item.link}>{item.name}</Link>
                })
            }
        </div>
    )
}

export default InspirationalDevs