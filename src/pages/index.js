import * as React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import ProfileCard from "../components/ProfileCard"
import Navigation from "../components/Navigation"
import Projects from "../components/sections/Projects"
import Resume from "../components/sections/Resume"
import Layout from "../components/layout"



const IndexPage = () => {
    return (
        <Layout>
            <section className="pt-8">
                <ProfileCard />
            </section>
            <section className="space-y-4">
                <h1>where I've been</h1>
                <Resume />
            </section>
        </Layout>

    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
