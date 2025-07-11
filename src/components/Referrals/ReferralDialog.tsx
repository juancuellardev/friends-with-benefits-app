import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Referral } from '@/types/referral';


interface Props {
    referral: Referral | null
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function ReferralDialog({ referral, open, setOpen }: Props) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                {referral && (
                    <DialogHeader>
                        <DialogTitle className='text-red-700'>Referral Details</DialogTitle>
                        <label className='text-blue-800'>Full Name</label>
                        <p className='text-gray-500'>{referral.full_name}</p>
                        <label className='text-blue-800'>Phone Number</label>
                        <p className='text-gray-500'>{referral.phone_number}</p>
                        <label className='text-blue-800'>English Level</label>
                        <p className='text-gray-500'>{referral.english_level}</p>
                        <label className='text-blue-800'>Status</label>
                        <p className='text-gray-500'>{referral.status}</p>
                        {
                            referral.bonus_status && (
                                <>
                                    <label className='text-blue-800'>Bonus</label>
                                    <p className='text-gray-500'>
                                        <span className='font-bold'>{referral.bonus_status}</span>
                                        <span className='font-bold'>${referral.bonus_value}</span>
                                    </p>
                                </>
                            )
                        }
                        <label className='text-blue-800'>Comments</label>
                        <p className='text-gray-500'>{referral.comments}</p>
                    </DialogHeader>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ReferralDialog
