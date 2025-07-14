import React, { useEffect, useState } from 'react'
import ReferralCard from './Referrals/ReferralCard'
import ReferralRow from './Referrals/ReferralRow'
import ReferralDialog from './Referrals/ReferralDialog'
import type { Referral } from '@/types/referral'
import { getReferrals } from '@/services/referral'

interface Props {
    handleOpen: (referral: Referral) => void
}

function Referrals({ handleOpen }: Props) {
    const [referrals, setReferrals] = useState<Referral[]>([])
    useEffect(() => {
        setReferrals(getReferrals())
        console.log("Referrals:", getReferrals())
    }, [])
    return (
        <div>
            <ReferralCard referrals={referrals} />
            <div>
                {referrals.map((referral, index) => (
                    <ReferralRow key={index} referral={referral} handleOpen={handleOpen} />
                ))}
            </div>
        </div>
    )
}

export default Referrals