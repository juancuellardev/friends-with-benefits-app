import React from "react";

function AdminCard() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
            <p className="text-gray-700 mb-4">Manage users, view statistics, and configure settings.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Go to Admin Dashboard
            </button>
        </div>
    );
}
export default AdminCard;