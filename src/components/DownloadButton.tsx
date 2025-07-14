import React from "react";
import * as XLSX from "xlsx";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import type { Referral } from "@/types/referral";

interface Props {
  referrals: Referral[]
}

function DownloadButton({ referrals }: Props) {
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(referrals);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Referrals");
    XLSX.writeFile(workbook, "referrals.xlsx");
  };

  return (
    <div className="flex justify-end items-center h-full">
      <Button
        onClick={handleDownload}
        variant="outline"
      >
        <Download className="mr-2" />
        Download
      </Button>
    </div>
  );
}
export default DownloadButton;