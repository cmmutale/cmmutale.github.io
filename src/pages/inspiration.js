import React from 'react'
import Header from '../components/Header'
import InspirationalDevs from '../components/sections/InspirationalDevs'
import { Link } from 'gatsby'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function inspiration() {
    return (
        <main className="scroll-smooth">
            <Header />
            <section className='py-8'>
                <div className='container mx-auto'>
                    <div className='my-4'>
                        <Link
                            to='/'
                            className='bg-white/10 py-1 px-2 flex items-center w-fit gap-2 rounded-md'>
                            <FaArrowLeftLong /> Back Home</Link>
                    </div>
                    <p className='text-lg my-4 italic'>Some inspirational developer I follow...</p>
                    <InspirationalDevs />
                </div>
            </section>
        </main>
    )
}

export default inspiration