import React from 'react'
import { NavLink } from 'react-router-dom'
import UserCard from './UserCard'
import AdminUserCard from './AdminUserCard'

function AdminSidebar() {
    return (
        <div className='flex flex-col gap-6'>
            <img src="/logo.png" className="h-24 mx-auto" alt="Logo" />
            <ul className='flex flex-col gap-2'>
                <li className='text-lg font-semibold'>
                    <NavLink to="/admin" className={({ isActive }) => (isActive ? 'underline underline-offset-4 underline-primary text-primary' : '')}>Referrals</NavLink>
                </li>
            </ul>
            <AdminUserCard />
        </div>
    )
}

export default AdminSidebar