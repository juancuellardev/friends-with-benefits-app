
import ReferralDialog from '../Referrals/ReferralDialog'
import { useState } from 'react'
import type { Referral } from '@/types/referral'
import Referrals from '../Referrals'

function MyReferrals() {
  const [open, setOpen] = useState(false)
  const [referral, setReferral] = useState<Referral | null>(null)

  const handleOpen = (referral: Referral) => {
    setReferral(referral)
    setOpen(true)
  }

  return (
    <div>
      <Referrals handleOpen={handleOpen} />
      <ReferralDialog referral={referral} open={open} setOpen={setOpen} />
    </div>
  )
}

export default MyReferrals