// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { app } from "../firebase";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";

// export default function ProfilePage() {
//   const { currentUser } = useSelector((state) => state.user);
//   const fileRef = useRef(null);

//   const [image, setImage] = useState(undefined);
//   const [imagePercent, setImagePercent] = useState(0);
//   const [imageError, setImageError] = useState(false);
//   const [formData, setFormData] = useState({});



//   useEffect(() => {
//     if (image) {
//       handleFileUpload(image);
//     }
//   }, [image]);

//   const handleFileUpload = async (image) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + image.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, image);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImagePercent(Math.round(progress));
//       },
//       (error) => {
//         setImageError(true);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setFormData({ ...formData, profilePicture: downloadURL });
      
//         });
//       }
//     );
//   };

//   const handleUpdate = () => {
  
//   };

//   const handleDeleteAccount = () => {
  
//   };

//   const handleSignOut = () => {
   
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-bold text-center">Profile</h2>
//         <form action="">
//           <div className="flex justify-center p-3">
//             <input
//               type="file"
//               ref={fileRef}
//               hidden
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//             <img
//               src={
//                 currentUser?.profilePicture || "https://via.placeholder.com/100"
//               }
//               alt="Profile"
//               className="w-24 h-24 rounded-full object-cover"
//               onClick={() => fileRef.current.click()}
//             />
//             <p className='text-sm self-center'>
//           {imageError ? (
//             <span className='text-red-700'>
//               Error uploading image (file size must be less than 2 MB)
//             </span>
//           ) : imagePercent > 0 && imagePercent < 100 ? (
//             <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
//           ) : imagePercent === 100 ? (
//             <span className='text-green-700'>Image uploaded successfully</span>
//           ) : (
//             ''
//           )}
//         </p>
//           </div>
//           <div className="space-y-4">
//             <input
//               defaultValue={currentUser.username}
//               type="text"
//               placeholder="Username"
//               id="username"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//             <input
//               defaultValue={currentUser.email}
//               type="email"
//               id="email"
//               placeholder="Email"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               id="password"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//             <button
//               onClick={handleUpdate}
//               className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
//             >
//               UPDATE
//             </button>
//           </div>
//         </form>
//         <div className="flex justify-between text-red-500">
//           <button onClick={handleDeleteAccount} className="hover:underline">
//             Delete Account
//           </button>
//           <button onClick={handleSignOut} className="hover:underline">
//             Sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfilePage() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);

  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        toast.error("Error uploading image (file size must be less than 2 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
          toast.success("Image uploaded successfully", {
            icon: "✔️",
          });
          setImagePercent(0); // Reset progress bar
        });
      }
    );
  };

  const handleUpdate = () => {
    // Update logic here
  };

  const handleDeleteAccount = () => {
    // Delete account logic here
  };

  const handleSignOut = () => {
    // Sign out logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile</h2>
        <form action="">
          <div className="flex flex-col items-center p-3">
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={
                formData.profilePicture || currentUser.profilePicture
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
              onClick={() => fileRef.current.click()}
            />
            {imagePercent > 0 && (
              <div className="w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${imagePercent}%` }}
                >
                  {imagePercent}%
                </div>
              </div>
            )}
            <p className="text-sm self-center mt-2">
              {imageError ? (
                <span className="text-red-700">
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePercent > 0 && imagePercent < 100 ? (
                <span className="text-slate-700">{`Uploading: ${imagePercent}%`}</span>
              ) : imagePercent === 100 ? (
                <span className="text-green-700">Image uploaded successfully</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="space-y-4">
            <input
              defaultValue={currentUser.username}
              type="text"
              placeholder="Username"
              id="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              defaultValue={currentUser.email}
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
        </form>
        <div className="flex justify-between text-red-500">
          <button onClick={handleDeleteAccount} className="hover:underline">
            Delete Account
          </button>
          <button onClick={handleSignOut} className="hover:underline">
            Sign out
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}