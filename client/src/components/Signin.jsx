// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Snackbar, Alert, CircularProgress } from "@mui/material";
// import {
//   signInFailure,
//   signInStart,
//   signInSuccess,
// } from "../redux/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";

// function Signin() {
//   const [formData, setFormData] = useState({});
//   const { loading } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(signInStart());
//     try {
//       const res = await fetch("/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error("Something went wrong");
//       }

//       dispatch(signInSuccess(data));
//       setSnackbar({
//         open: true,
//         message: "Signin successful!",
//         severity: "success",
//       });

//       setTimeout(() => {
//         navigate("/");
//       }, 1000);  // Navigate to home after 3 seconds
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//       setSnackbar({
//         open: true,
//         message: "Something went wrong",
//         severity: "error",
//       });
//     }
//   };

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Sign In
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-6">
//             <label className="block">
//               <span className="text-gray-700 font-medium">Email</span>
//               <input
//                 type="email"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500"
//                 placeholder="devzee@dev.com"
//                 id="email"
//                 onChange={handleChange}
//               />
//             </label>
//             <label className="block">
//               <span className="text-gray-700 font-medium">Password</span>
//               <input
//                 type="password"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500"
//                 placeholder="********"
//                 id="password"
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className="mt-8 flex flex-col items-center gap-4">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//               disabled={loading}
//             >
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//             <button
//               type="button"
//               className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 flex items-center justify-center"
//             >
//               <img
//                 src="https://img.icons8.com/color/16/000000/google-logo.png"
//                 alt="Google"
//                 className="mr-2"
//               />
//               Sign In with Google
//             </button>
//           </div>
//         </form>
//         <div className="mt-4 text-center text-gray-600">
//           <p>
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{ width: "100%" }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// export default Signin;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert, CircularProgress } from "@mui/material";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Signin() {
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      dispatch(signInSuccess(data));
      setSnackbar({
        open: true,
        message: "Signin successful!",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);  // Navigate to home after 1 second
    } catch (error) {
      dispatch(signInFailure(error.message));
      setSnackbar({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <label className="block">
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500"
                placeholder="devzee@dev.com"
                id="email"
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-medium">Password</span>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-500"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 flex items-center justify-center"
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              Sign In with Google
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signin;
