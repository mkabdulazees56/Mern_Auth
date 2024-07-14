import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { signInSuccess } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function OAuth() {
  const dispatch = useDispatch();
  const handelGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          emai: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("Could not login with Google");
    }
  };
  return (
    <button
      type="button"
      onClick={handelGoogleClick}
      className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 flex items-center justify-center"
    >
      <img
        src="https://img.icons8.com/color/16/000000/google-logo.png"
        alt="Google"
        className="mr-2"
      />
      Continue with Google
    </button>
  );
}
