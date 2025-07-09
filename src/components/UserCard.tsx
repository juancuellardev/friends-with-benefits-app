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

function UserCard() {
    return (
        <Card className="bg-white/90 backdrop-blur-md shadow-md">
            <CardContent>
                <div className="flex items-center justify-between bg-gradient-to-br from-primary-dark to-primary rounded-lg p-4">
                    <img src="/avatar.jpg" alt="Avatar" className="w-20 h-20 rounded-full" />
                    <div className="flex items-center">
                        {/* Points */}
                        <span className="text-4xl font-semibold text-white flex items-center gap-2">
                            100
                            <img src="/coin.png" alt="Coin" className="w-10 h-auto" />
                        </span>
                    </div>
                </div>
                {/* Name */}
                <p className="mt-4 text-lg font-semibold text-primary">John Doe</p>
                {/* Email */}
                <p className="mt-1 text-sm text-gray-600">john.doe@cp-360.com</p>
                {/* Logout Button */}
                <Button className="mt-4">Logout</Button>
            </CardContent>
        </Card>
    )
}

export default UserCard