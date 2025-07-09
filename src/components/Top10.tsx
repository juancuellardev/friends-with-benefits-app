import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useState } from "react";

const top10 = [
    { name: "John Doe", points: 100 },
    { name: "Jane Doe", points: 90 },
    { name: "Bob Smith", points: 80 },
    { name: "Alice Johnson", points: 70 },
    { name: "Charlie Brown", points: 60 },
    { name: "Emily Davis", points: 50 },
    { name: "David Wilson", points: 40 },
    { name: "Olivia Martinez", points: 30 },
    { name: "Michael Johnson", points: 20 },
    { name: "Sophia Thompson", points: 10 },
]

function Top10() {
    const [period, setPeriod] = useState('weekly');

    const handlePeriodChange = (newPeriod: string) => {
        setPeriod(newPeriod);
    }

    return (
        <Card className="bg-white/90 backdrop-blur-md shadow-md gap-2">
            <CardHeader>
                <CardTitle className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-full text-center py-2 px-4">
                    Top 10
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="isolate flex -space-x-px justify-center">
                    <Button
                        variant={period === 'weekly' ? 'default' : 'outline'}
                        className="rounded-r-none focus:z-10"
                        onClick={() => handlePeriodChange('weekly')}
                    >
                        Weekly
                    </Button>
                    <Button
                        variant={period === 'monthly' ? 'default' : 'outline'}
                        className="rounded-none focus:z-10"
                        onClick={() => handlePeriodChange('monthly')}
                    >
                        Monthly
                    </Button>
                    <Button
                        variant={period === 'annually' ? 'default' : 'outline'}
                        className="rounded-l-none focus:z-10"
                        onClick={() => handlePeriodChange('annually')}
                    >
                        Annually
                    </Button>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    {top10.map((user, index) => (
                        <div key={index} className="flex items-center gap-1 justify-between">
                            <div className="text-lg font-semibold w-8 text-center">
                                {index < 3 ? (
                                    <img
                                        src={`/medal-${index + 1}.png`}
                                        alt={`Medal ${index + 1}`}
                                        className="w-8 h-auto"
                                    />
                                ) : (
                                    <div>
                                        <span>{index + 1}</span>
                                        <span className="text-sm">st</span>
                                    </div>
                                )}
                            </div>
                            <span className="text-lg flex-1">{user.name}</span>
                            <span className="text-lg font-semibold flex items-center gap-2">
                                {user.points}
                                <img src="/coin.png" alt="Coin" className="w-6 h-auto" />
                            </span>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card>
    )
}

export default Top10
