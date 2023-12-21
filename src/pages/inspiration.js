import React from 'react'
import Header from '../components/Header'
import InspirationalDevs from '../components/sections/InspirationalDevs'
import { Link } from 'gatsby'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Layout from '../components/layout';

function inspiration() {
    return (
        <Layout>
            <section>
                <h1 className='mb-4'>Some developers I find inspirational</h1>
                <InspirationalDevs />
                <hr />
            </section>
        </Layout>
    )
}

export default inspiration