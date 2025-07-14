import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { BonusStatus, Referral, Status } from '@/types/referral';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getBonusStatuses, getStatuses, updateReferral } from '@/services/referral';
import { Button } from './ui/button';


interface Props {
    referral: Referral | null
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function AdminReferralDialog({ referral, open, setOpen }: Props) {
    const [bonusStatus, setBonusStatus] = React.useState<BonusStatus | ''>(referral?.bonus_status ?? '');
    const [bonusValue, setBonusValue] = React.useState<number>(referral?.bonus_value || 0);
    const [status, setStatus] = React.useState<string>(referral?.status || '');

     React.useEffect(() => {
        if (referral) {
            setStatus(referral.status || '');
            setBonusStatus(referral.bonus_status ?? '');
            setBonusValue(referral.bonus_value || 0);
        }
    }, [referral]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newReferral: Referral = {
            ...referral!,
            bonus_status: bonusStatus as BonusStatus,
            bonus_value: bonusValue,
            status: status as Status,
        }
        console.log("Updated referral:", newReferral);
        updateReferral(newReferral)
        setOpen(false)
    }
  return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                {referral && (
                    <DialogHeader>

                        <DialogTitle className='text-red-700'>Referral Details Admin</DialogTitle>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <label className='text-blue-800'>Full Name</label>
                        <p className='text-gray-500'>{referral.full_name}</p>
                        <label className='text-blue-800'>Phone Number</label>
                        <p className='text-gray-500'>{referral.phone_number}</p>
                        <label className='text-blue-800'>English Level</label>
                        <p className='text-gray-500'>{referral.english_level}</p>
                        <label className='text-blue-800'>Status</label>
                        <Select
                        value={status}
                        onValueChange={(value) => setStatus(value)}
                        >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {getStatuses().map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                                {status.label}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                        <label className='text-blue-800'>Bonus</label>
                        <Select value={bonusStatus} onValueChange={(value) => setBonusStatus(value as BonusStatus)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Bonus Status" />
                            </SelectTrigger>
                            <SelectContent>
                                {getBonusStatuses().map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <label className='text-blue-800'>Value to be paid</label>
                       <input
                            type="number"
                            value={bonusValue}
                            onChange={(e) => setBonusValue(Number(e.target.value))}
                            className="border border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 rounded"
                        />
                        <label className='text-blue-800'>Comments</label>
                        <p className='text-gray-500'>{referral.comments}</p>
                        <Button type='submit'>
                            Update
                        </Button>
                </form>
                    </DialogHeader>
                )}
                
            </DialogContent>
        </Dialog>
    )
}

export default AdminReferralDialog