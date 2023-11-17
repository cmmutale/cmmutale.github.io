import React from "react"
import { Link } from "gatsby"

const navLinks = [
    {
        title: "Projects",
        link: "#projects",
        disabled: false
    },
    {
        title: "Resume",
        link: "#resume",
        disabled: false
    },
    {
        title: "Writing",
        link: "#blogs",
        disabled: true
    },
]
function Navigation() {
    return (
        <div>
            <div className="flex flex-col">
                {
                    navLinks.map((item, index) => {
                        if (item.disabled) {
                            return <div
                                key={index}
                                to={item.link}
                                className="text-white/10">{item.title}</div>
                        } else {
                            return <Link
                                key={index}
                                to={item.link}
                                className="hover:underline">{item.title}</Link>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Navigation