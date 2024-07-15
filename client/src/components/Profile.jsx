import React from "react";
import { useSelector } from "react-redux";

function ProfilePage() {
  const { currentUser } = useSelector((state) => state.user);

  const handleUpdate = () => {
    // Handle update logic here
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic here
  };

  const handleSignOut = () => {
    // Handle sign out logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile</h2>
        <div className="flex justify-center">
          <img
            src={
              currentUser?.profilePicture || "https://via.placeholder.com/100"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <input defaultValue={currentUser.username}
            type="text"
            placeholder="Username"
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input defaultValue={currentUser.email}
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input 
            type="password"
            placeholder="Password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleUpdate}
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            UPDATE
          </button>
        </div>
        <div className="flex justify-between text-red-500">
          <button onClick={handleDeleteAccount} className="hover:underline">
            Delete Account
          </button>
          <button onClick={handleSignOut} className="hover:underline">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
