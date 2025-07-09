import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import PolygonBg from './components/icons/PolygonBg'


function Layout() {
    return (
        <div className='relative h-screen text-white'>
            <PolygonBg className="absolute -z-10 w-full h-auto top-[-40vh] drop-shadow-2xl" />
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
