import React from 'react'
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
  return (
    <div className='flex flex-col gap-6'>

        <div className='flex flex-col gap-2'>
            <Label htmlFor="name" className='text-primary font-normal'>
                <UserPlus className='text-destructive' width={20} height={20} />
                Candidate's Full Name
            </Label>
            <Input id="name" placeholder="Enter your friend's full name" />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor="phone" className='text-primary font-normal'>
                <Phone className='text-destructive' width={20} height={20} />
                Candidate's Phone Number
            </Label>
            <Input id="phone" placeholder="Enter your friend's phone number" />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor="english-level" className='text-primary font-normal'>
                <Languages className='text-destructive' width={20} height={20} />
                English Level
            </Label>
            <Select>
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
            <Textarea id="comments" placeholder="Enter your comments" />
        </div>
    </div>
  )
}

export default ReferAFriend