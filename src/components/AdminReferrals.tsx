import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Referrals from "./Referrals";
import AdminReferralDialog from "./AdminReferralDialog";
import type { Referral } from "@/types/referral";

function AdminReferrals() {
  const [open, setOpen] = useState(false)
  const [referral, setReferral] = useState<Referral | null>(null)

  const handleOpen = (referral: Referral) => {
    setReferral(referral)
    setOpen(true)
  }
  return (
    <div>
      <Referrals handleOpen={handleOpen} />
      <AdminReferralDialog referral={referral} open={open} setOpen={setOpen} />
    </div>
  );
}
export default AdminReferrals;