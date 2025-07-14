import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import PolygonBg from '@/components/icons/PolygonBg'
import AdminSidebar from './AdminSidebar'


function AdminLayout() {
    return (
        <div className='relative min-h-screen h-full'>
            <PolygonBg className="absolute w-full h-auto top-[-40vh] drop-shadow-2xl z-10 pointer-events-none" />
            <div className='relative z-20'>
                <main className='container mx-auto grid grid-cols-4 gap-6 py-10'>
                    <div className='col-span-1 flex flex-col gap-6 bg-white shadow-md rounded-lg p-6'>
                        <AdminSidebar />
                    </div>
                     <div className='col-span-3 bg-white shadow-md rounded-lg p-6'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
