import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent,} from "@/components/ui/card"
import { Button } from './ui/button'
import ReferAFriend from './tabs/ReferAFriend'
import MyReferrals from './tabs/MyReferrals'
import Awards from './tabs/Awards'

function TabsReferrals() {
    return (
        <Tabs defaultValue="refer-a-friend">
            <TabsList>
                <TabsTrigger value="refer-a-friend">Refer a friend</TabsTrigger>
                <TabsTrigger value="my-referrals">My Referrals</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
            </TabsList>
            <TabsContent value="refer-a-friend">
                <Card>
                    <CardContent>
                        <ReferAFriend />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="my-referrals">
                <Card>
                    <CardContent>
                        <MyReferrals />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="awards">
                <Card>
                    <CardContent>
                        <Awards />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default TabsReferrals