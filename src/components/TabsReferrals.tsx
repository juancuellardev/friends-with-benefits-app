import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

function TabsReferrals() {
    return (
        <Tabs defaultValue="refer-a-friend">
            <TabsList>
                <TabsTrigger value="refer-a-friend">Refer a friend</TabsTrigger>
                <TabsTrigger value="my-referrals">My Referrals</TabsTrigger>
            </TabsList>
            <TabsContent value="refer-a-friend">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when you&apos;re
                            done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <label htmlFor="tabs-demo-name">Name</label>
                            <input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <label htmlFor="tabs-demo-username">Username</label>
                            <input id="tabs-demo-username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="my-referrals">Change your password here.</TabsContent>
        </Tabs>
    )
}

export default TabsReferrals