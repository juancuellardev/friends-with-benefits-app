
import TabsReferrals from '@/components/TabsReferrals'
import Top10 from '@/components/Top10'
import UserCard from '@/components/UserCard'
import React from 'react'

function HomePage() {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-6 py-10'>
      <div className='col-span-1 flex flex-col gap-6'>
        <UserCard />
        <Top10 />
      </div>
      <div className='col-span-3'>
        <TabsReferrals />
      </div>
    </div>
  )
}

export default HomePage