
import AdminCard from '@/components/AdminCard'
import React from 'react'
import AdminReferrals from '@/components/AdminReferrals'

function AdminPage() {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-6 py-10'>
      <div className='col-span-1 flex flex-col gap-6'>
        <AdminCard />
      </div>
      <div className='col-span-3 bg-white shadow-md rounded-lg p-6'>
        <AdminReferrals />
      </div>
    </div>
  )
}

export default AdminPage