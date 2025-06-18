
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import cap from "../../assets/cap.jpg";

// const LoginPortal = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError("");

//     const { email, password } = formData;

//     if (!email || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Enter a valid email address.");
//       return;
//     }

//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }

//     if (email === "student@example.com" && password === "password") {
//       localStorage.setItem("isAuthenticated", "true");
//       if (formData.rememberMe) {
//         localStorage.setItem("email", email);
//       }
//       navigate("/home");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-pink-200">
//       <div className="bg-white bg-opacity-90 backdrop-blur-sm shadow-xl rounded-xl px-10 py-12 w-full max-w-md">
//         <div className="text-center mb-8">
//           <img
//             src={cap}
//             alt="University Cap"
//             className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-blue-800"
//           />
//           <h1 className="text-2xl font-bold text-blue-800">CAMELQ University</h1>
//           <p className="text-sm text-gray-600">Login Portal</p>
//         </div>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-4 border rounded-md"
//           />

//           <div className="relative mb-2">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password (min 8 characters)"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md pr-10"
//             />
//             {formData.password && (
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 text-sm"
//               >
//                 {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
//               </button>
//             )}
//           </div>

//           <div className="flex justify-between items-center mb-4 text-sm">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="rememberMe"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Remember Me
//             </label>
//             <Link to="/forgot-password" className="text-blue-600 hover:underline">
//               Forgot Password?
//             </Link>
//           </div>

//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-center text-sm text-gray-500 mt-4">
//           Demo credentials: email: <strong>student@example.com</strong> / password: <strong>password</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPortal;


import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cap from "../../assets/cap.jpg";

const LoginPortal = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Auto-fill email if remembered
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail, rememberMe: true }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const { email, password, rememberMe } = formData;

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Dummy credentials check
    const correctEmail = "student@example.com";
    const correctPassword =
      localStorage.getItem("newPassword") || "password"; // From password reset flow

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      if (rememberMe) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-400">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm shadow-xl rounded-xl px-10 py-12 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={cap}
            alt="University Cap"
            className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-blue-800"
          />
          <h1 className="text-2xl font-bold text-blue-800">CAMELQ University</h1>
          <p className="text-sm text-gray-600">Login Portal</p>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password (min 8 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            {formData.password && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            )}
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">
          Demo login: <br />
          <strong>student@example.com</strong> / <strong>password</strong><br />
          (or new password if you reset)
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;
