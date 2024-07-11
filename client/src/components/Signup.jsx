import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <div className="space-y-6">
          <label className="block">
            <span className="text-gray-700 font-medium">Username</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500" 
              placeholder="Abdul Azees"
              id="username" 
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Email</span>
            <input 
              type="email" 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500" 
              placeholder="devzee@dev.com"
              id="email" 
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Password</span>
            <input 
              type="password" 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500" 
              placeholder="********" 
              id="password"
            />
          </label>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Sign Up</button>
          <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Sign Up with Google
          </button>
        </div>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
