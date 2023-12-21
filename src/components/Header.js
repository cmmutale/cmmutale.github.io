import React from 'react'
import Logo from './Logo'
import { Link } from 'gatsby'
import { LuCodepen, LuGithub, LuTwitter } from "react-icons/lu";

const socialLinks = [
    {
        title: "Twitter",
        link: "https://www.twitter.com/chilumm",
        icon: <LuTwitter />
    },
    {
        title: "Github",
        link: "https://www.github.com/cmmutale",
        icon: <LuGithub />
    },
    {
        title: "Codepen",
        link: "https://www.github.com/cmmutale",
        icon: <LuCodepen />
    },
]

const headerStyles = {
    backdropFilter: "blur(10px)"
}

function Header() {
    return (
        <>
            <header className='flex items-center justify-between py-12'>
                <nav>
                    <ul className='flex gap-4'>
                        <li><a href='/'>home</a></li>
                        <li><a href='/work'>work</a></li>
                        {/* <li><a href='/blog'>blog</a></li> */}
                        <li><a href='/inspiration'>inspo</a></li>
                    </ul>
                </nav>
                <div className='max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:bg-white/10'>
                    <ul className='flex items-center gap-4 text-lg'>
                        {
                            socialLinks.map((item, index) => {
                                return <li className='hover:bg-white/10 rounded-full p-2 transition-all duration-300'>
                                    <Link to={item.link} target="_blank">{item.icon}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </header>
        </>
        // <header
        //     className='flex flex-col gap-2 sm:flex-row max-w-4xl mx-auto justify-between items-center
        //     my-2 max-sm:mx-2 sticky top-2 z-50 bg--blur
        //     px-4 py-2 bg-white/10 rounded-md'>
        //     <Logo />
        //     <nav className=''>
        //         <ul className='flex items-center gap-4 text-lg'>
        //             {
        //                 socialLinks.map((item, index) => {
        //                     return <li className='hover:bg-white/10 rounded-full p-2 transition-all duration-300'>
        //                     <Link to={item.link} target="_blank">{item.icon}</Link>
        //                     </li>
        //                 })
        //             }
        //         </ul>
        //     </nav>
        // </header>
    )
}

export default Header