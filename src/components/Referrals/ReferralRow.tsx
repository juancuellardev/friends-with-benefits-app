import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


function ReferralRow() {
  return (
    <div className='flex justify-between items-center border border-primary rounded-md p-2 mt-5 ml-4 mr-4'>
      <div>
        <p className="text-blue-800 azul">Wilmar diaz soto</p>
        <p className='text-gray-500'>2025-06-06</p>
        <p className='text-gray-500'>Created By Kael Thorne</p>
      </div>
      <div>
        <p className='text-blue-800'>Phone Number</p>
        <p className='text-gray-500'>3154897542</p>
      </div>
      <div>
        <p className='text-blue-800'>Status</p>
        <p className='text-gray-500'>Hire</p>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="group hover:bg-blue-950">
              <ChevronRight className="text-blue-800 group-hover:text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className='text-red-700'>Referral Details</DialogTitle>
              <label className='text-blue-800'>Candidate's Full Name</label>
              <p className='text-gray-500'>Wilmar diaz soto</p>
              <label className='text-blue-800'>Candidate's Phone Number</label>
              <p className='text-gray-500'>3154897542</p>
              <label className='text-blue-800'>Candidate's English Level</label>
              <p className='text-gray-500'>B2</p>
              <label className='text-blue-800'>Status</label>
              <p className='text-gray-500'>Hire</p>
              <label className='text-blue-800'>Bond status</label>
              <p className='text-gray-500'>Send to Payment</p>
              <label className='text-blue-800'>Value to be paid</label>
              <p className='text-gray-500'>1.000.000</p>
              <label className='text-blue-800'>Comments from the Referent</label>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default ReferralRow