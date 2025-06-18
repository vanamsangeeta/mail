
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!newPassword || !confirmPassword) {
//       setMessage({ type: 'error', text: 'Please fill in both fields.' });
//       return;
//     }

//     if (newPassword.length < 8) {
//       setMessage({ type: 'error', text: 'Password must be at least 8 characters.' });
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setMessage({ type: 'error', text: 'Passwords do not match.' });
//       return;
//     }

//     // Dummy success flow
//     setMessage({ type: 'success', text: 'Password reset successful! Redirecting...' });
//     setTimeout(() => {
//       alert('Password changed successfully! Please login again.');
//       navigate('/login');
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
//           Create New Password
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Confirm new password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
//           >
//             Reset Password
//           </button>
//         </form>

//         {message.text && (
//           <div
//             className={`mt-4 text-sm text-center p-2 rounded ${
//               message.type === 'success'
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {message.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState({ type: "", text: "" });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!newPassword || !confirmPassword) {
//       setMessage({ type: "error", text: "Please fill in both fields." });
//       return;
//     }

//     if (newPassword.length < 8) {
//       setMessage({ type: "error", text: "Password must be at least 8 characters." });
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setMessage({ type: "error", text: "Passwords do not match." });
//       return;
//     }

//     localStorage.setItem("studentPassword", newPassword);

//     setMessage({ type: "success", text: "Password reset successful!" });
//     setTimeout(() => {
//       alert("Password changed. Please login again.");
//       navigate("/login");
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Reset Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             placeholder="New password"
//             className="w-full p-3 mb-4 border rounded"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm new password"
//             className="w-full p-3 mb-4 border rounded"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
//             Reset Password
//           </button>
//         </form>
//         {message.text && (
//           <div
//             className={`mt-4 text-center p-2 rounded ${
//               message.type === "success"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {message.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setMessage({ type: "error", text: "Please fill in both fields." });
      return;
    }

    if (newPassword.length < 8) {
      setMessage({ type: "error", text: "Password must be at least 8 characters." });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    localStorage.setItem("newPassword", newPassword);

    setMessage({ type: "success", text: "Password reset successful!" });
    setTimeout(() => {
      alert("Password changed. Please login again.");
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Reset Password</h2>
        <form onSubmit={handleSubmit}>

          {/* New Password Field */}
          <div className="relative mb-4">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New password"
              className="w-full p-3 border rounded pr-10"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              className="absolute top-3 right-3 text-gray-600 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full p-3 border rounded pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="absolute top-3 right-3 text-gray-600 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
            Reset Password
          </button>
        </form>

        {message.text && (
          <div
            className={`mt-4 text-center p-2 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
