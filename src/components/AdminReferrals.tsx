import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function AdminReferrals() {
  return (
    <Tabs defaultValue="refer-a-friend">
      <TabsList>
        <TabsTrigger value="referrals">Referrals</TabsTrigger>
        <TabsTrigger value="awards">Awards</TabsTrigger>
      </TabsList>
      <TabsContent value="referrals">
        {/* Content for My Referrals */}
      </TabsContent>
      <TabsContent value="awards">
        {/* Content for Awards */}
      </TabsContent>
    </Tabs>
  );
}
export default AdminReferrals;