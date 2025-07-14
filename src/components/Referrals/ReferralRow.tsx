import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import type { Referral } from '@/types/referral';

interface Props {
  referral: Referral,
  handleOpen: (referral: Referral) => void
}

function ReferralRow({ referral, handleOpen }: Props) {
  return (
    <div className='flex justify-between items-center border border-primary rounded-md p-2 mt-5 ml-4 mr-4'>
      <div>
        <p className="text-blue-800 azul">{referral.full_name}</p>
        <p className='text-gray-500'>{referral.created_at}</p>
        <p className='text-gray-500'>Created By: {referral.created_by}</p>
      </div>
      <div>
        <p className='text-blue-800'>Phone Number</p>
        <p className='text-gray-500'>{referral.phone_number}</p>
      </div>
      <div>
        <p className='text-blue-800'>Status</p>
        <p className='text-gray-500'>{referral.status}</p>
      </div>
      <div>
        <Button variant="outline" className="group hover:bg-blue-950" onClick={() => handleOpen(referral)}>
          <ChevronRight className="text-blue-800 group-hover:text-white" />
        </Button>
      </div>
    </div>
  )
}

export default ReferralRow