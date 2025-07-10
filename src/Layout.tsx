import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import PolygonBg from './components/icons/PolygonBg'


function Layout() {
    return (
        <div className='relative min-h-screen text-white bg-primary'>
            <PolygonBg className="absolute w-full h-auto top-[-40vh] drop-shadow-2xl z-10 pointer-events-none" />
            <div className='relative z-20'>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
