import React from "react";

function Awards() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md shadow-sm">
            <p className="text-blue-800 font-bold text-lg flex items-center gap-2 animate-pulse">
            🎁 Coming soon: Redeem your coins!
            </p>
            <p className="text-gray-600 mt-1">
            We’re working on exclusive rewards just for you.
            </p>
            <p className="text-gray-500 italic">
            Stay tuned — exciting things are on the way! 🚀
            </p>
        </div>
    </div>
  );
}

export default Awards;