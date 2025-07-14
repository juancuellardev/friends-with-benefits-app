import React from 'react'
import { Search } from 'lucide-react'
import type { Referral } from '@/types/referral';
import DownloadButton from '@/components/DownloadButton';


interface Props {
  referrals: Referral[];
}

function ReferralCard({ referrals }: Props) {
  return (
     <div className="space-y-6 px-4 pt-4">
      <div className="flex justify-between items-center">
        <input
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="2024-06-10"
        />
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Hinted search text"
            className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
    </div>
    <DownloadButton referrals={referrals} />
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-xl p-6 shadow-md text-center">
          <h2 className="text-lg font-semibold">Total Referidos</h2>
          <p className="text-3xl font-bold mt-2">{referrals.length}</p>
        </div>
        <div className="flex-1 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-xl p-6 shadow-md text-center">
          <h2 className="text-lg font-semibold">Total Hiring</h2>
          <p className="text-3xl font-bold mt-2">{referrals.filter((referral) => referral.status === "Hired").length}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ReferralCard
