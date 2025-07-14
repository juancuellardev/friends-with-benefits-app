import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

function AdminUserCard() {
  return (
        <Card className="shadow-none border-0">
            <CardContent className='p-0'>
                <div className="flex items-center justify-between bg-gradient-to-br from-primary-dark to-primary rounded-lg p-4">
                    <img src="/avatar.jpg" alt="Avatar" className="w-20 h-20 rounded-full" />
                    <div className="flex flex-col justify-center">
                            {/* Name */}
                            <p className="text-lg font-semibold text-white">John Doe</p>
                            {/* Email */}
                            <p className="text-sm text-blue-200">john.doe@cp-360.com</p>
                    </div>
                </div>
                {/* Logout Button */}
                <Button className="mt-4">Logout</Button>
            </CardContent>
        </Card>
    )
}

export default AdminUserCard