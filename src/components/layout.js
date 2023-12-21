import React from 'react'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className='max-w-3xl mx-auto px-4 md:px-0 mb-[20vh]'>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout