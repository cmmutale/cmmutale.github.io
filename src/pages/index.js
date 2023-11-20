import * as React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import ProfileCard from "../components/ProfileCard"
import Navigation from "../components/Navigation"
import Projects from "../components/sections/Projects"
import Resume from "../components/sections/Resume"



const IndexPage = () => {
    return (
        <main className="px-2 scroll-smooth">
            <Header />
            <div className="min-h-screen flex justify-center items-center p-8">
                <section className="container mx-auto">
                    <div className="flex md:flex-row flex-col gap-8 items-center">
                        <div className="lg:basis-1/3 basis-1/2 shrink-0 space-y-4 sticky top-0">
                            <ProfileCard />
                            <span className="block h-[2px] w-full bg-white/10 shadow-lg"></span>
                            <Navigation />
                        </div>
                        <div className="grow">
                        </div>
                    </div>
                </section>
            </div>
            <div id="projects" className="min-h-screen flex justify-center items-center p-8">
                <section className="container mx-auto">
                    <h1 className="text-3xl font-semibold underline text-center my-8">Portfolio</h1>
                    <Projects />
                </section>
            </div>
            <div id="resume" className="min-h-screen flex justify-center items-center p-8">
                <section className="container mx-auto">
                    <h1 className="text-3xl font-semibold underline text-center my-4">Work History</h1>
                    <Resume />
                </section>
            </div>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
