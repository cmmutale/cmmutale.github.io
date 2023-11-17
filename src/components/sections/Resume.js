import React from 'react'
import ResumeCard from '../ResumeCard'

const WorkExperience = [
    {
        position: 'Full Stack Developer',
        from: 'May 2022',
        to: 'May 2023',
        company: 'Spherexx.com',
        location: 'Tulsa, OK',
        work: [
            "Enhanced client satisfaction by developing and implementing visually captivating, responsive user-interfacesfor property management companies such as ARG, Morgan Group, Paddock Estates",
            "Optimized client services by leveraging efficient data querying techniques to generate comprehensive reports. This improved the development of tools and services, resulting in operational efficiency.",
            "Streamlined media asset management by maintenance and enhancement of in-house CMS platform. This enhanced productivity and streamlined workflows."
        ]
    },
    {
        position: 'XSEDE Apprentice',
        from: 'February 2022',
        to: 'May 2022',
        company: 'Shodor Education Foundation',
        location: 'Tulsa, OK (Remote)',
        work: [
            "Analyzed data using Machine Learning techniques to produce research that would help inform social work efforts to help 1000 households facing eviction in the city of Tulsa",
            "Leveraged tools in a High-Performance Computing environment, to clean, and improve and extrapolate a limited data pool, resulting in data sets that would be used in different scenarios",
        ]
    },
    {
        position: 'Data Entry Assistant',
        from: 'January 2022',
        to: 'April 2022',
        company: 'Oral Roberts University',
        location: 'Tulsa, OK',
        work: [
            "Provided valuable insight to school departments by leveraging Salesforce software for data analysis. This empowered informed decision making, leading to operational efficiency across multiple departments.",
            "Improved admission campaigns through innovative data analysis that led to improved student interest in admissions.",
        ]
    },
    {
        position: 'IT Student Assistant/Helpdesk',
        from: 'December 2020',
        to: 'May 2021',
        company: 'Oral Roberts University',
        location: 'Tulsa OK',
        work: [
            "Assembled and configured numerous workstations for faculty, staff, and students, ensuring seamless productivity, and ensuring a reliable and efficient computing environment.",
            "Maintained school systems and software such as payment systems, email, and Wi-Fi, which led to essential operations remaining functional and fully operational for school operations.",
        ]
    }
]

function Resume() {
    return (
        <div className='space-y-12'>
            {
                WorkExperience.map((item, index) => {
                    return <ResumeCard
                        position={item.position}
                        from={item.from}
                        to={item.to}
                        company={item.company}
                        location={item.location}
                        work={item.work}
                    />
                })
            }
        </div>
    )
}

export default Resume