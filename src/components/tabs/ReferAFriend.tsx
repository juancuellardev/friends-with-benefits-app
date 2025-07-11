import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Languages, MessageSquare, Phone, UserPlus } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useState } from 'react'
import type { Referral } from '@/types/referral'
import { addReferral } from '@/services/referral'

const englishLevels = [
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "B1", label: "B1" },
    { value: "B1+", label: "B1+" },
    { value: "B2", label: "B2" },
    { value: "B2+", label: "B2+" },
    { value: "C1", label: "C1" },
    { value: "C2", label: "C2" },
]

function ReferAFriend() {
    const [fullName, setFullName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [englishLevel, setEnglishLevel] = useState<string>('')
    const [comments, setComments] = useState<string>('')

    const resetForm = () => {
        setFullName('')
        setPhoneNumber('')
        setEnglishLevel('')
        setComments('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newReferral: Referral = {
            full_name: fullName,
            phone_number: phoneNumber,
            english_level: englishLevel,
            status: 'Pending',
            created_at: new Date().toISOString(),
            created_by: 'John Doe',
            comments: comments,
        }

        addReferral(newReferral)

        resetForm()
        
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

            <div className='flex flex-col gap-2'>
                <Label htmlFor="name" className='text-primary font-normal'>
                    <UserPlus className='text-destructive' width={20} height={20} />
                    Candidate's Full Name
                </Label>
                <Input id="name" placeholder="Enter your friend's full name" onChange={(e) => setFullName(e.target.value)} value={fullName} />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor="phone" className='text-primary font-normal'>
                    <Phone className='text-destructive' width={20} height={20} />
                    Candidate's Phone Number
                </Label>
                <Input id="phone" placeholder="Enter your friend's phone number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor="english-level" className='text-primary font-normal'>
                    <Languages className='text-destructive' width={20} height={20} />
                    English Level
                </Label>
                <Select  value={englishLevel} onValueChange={setEnglishLevel}>
                    <SelectTrigger id="english-level" className='w-full'>
                        <SelectValue placeholder="Select English Level" />
                    </SelectTrigger>
                    <SelectContent>
                        {englishLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                                {level.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor="comments" className='text-primary font-normal'>
                    <MessageSquare className='text-destructive' width={20} height={20} />
                    Comments from the referer (optional)
                </Label>
                <Textarea id="comments" placeholder="Enter your comments" onChange={(e) => setComments(e.target.value)} value={comments} />
            </div>
            <Button variant="destructive" type="submit">
                Send Referral
            </Button>
            <Button type="reset" onClick={resetForm}>
                Cancel
            </Button>
        </form>
    )
}

export default ReferAFriend