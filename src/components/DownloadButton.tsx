import React from "react";
import { Button } from "./ui/button";

function DownloadButton() {
  const handleDownload = () => {
    // Logic to handle download
    console.log("Download initiated");
  };

  return (
    <div className="flex justify-end items-center h-full">
      <Button
        onClick={handleDownload}
      >
        Download
      </Button>
    </div>
  );
}
export default DownloadButton;