
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [popup, setPopup] = useState({ type: '', message: '' });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Email format check
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       setPopup({ type: 'error', message: 'Please enter your email.' });
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       setPopup({ type: 'error', message: 'Invalid email format.' });
//       return;
//     }

//     // Dummy mail validation
//     if (email !== 'student@example.com') {
//       setPopup({ type: 'error', message: 'Email not found in our records.' });
//       return;
//     }

//     // Success flow
//     setPopup({
//       type: 'success',
//       message: 'Reset link sent successfully. Redirecting to login...',
//     });

//     setTimeout(() => {
//       navigate('/login');
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Forgot Password</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your university email"
//             className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Send Reset Link
//           </button>
//         </form>

//         {popup.message && (
//           <div
//             className={`mt-4 text-center text-sm font-medium p-2 rounded ${
//               popup.type === 'success'
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {popup.message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [dummyOtpShown, setDummyOtpShown] = useState(false);

  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email.' });
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Invalid email format.' });
      return;
    }

    if (email !== 'student@example.com') {
      setMessage({ type: 'error', text: 'Email not found in our records.' });
      return;
    }

    // Email is valid
    setMessage({ type: 'success', text: 'OTP sent to your email.' });
    setStep(2);
    setDummyOtpShown(true); // show fake OTP
  };

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.join('') === '123456') {
      setMessage({ type: 'success', text: 'OTP verified successfully.' });
      navigate('/reset-password');
    } else {
      setMessage({ type: 'error', text: 'Invalid OTP. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Forgot Password</h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your university email"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="flex justify-between gap-2 mb-4">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-10 h-10 text-center border border-gray-400 rounded text-lg"
                  maxLength={1}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        {message.text && (
          <div
            className={`mt-4 text-center text-sm font-medium p-2 rounded ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {dummyOtpShown && (
          <div className="mt-4 text-center text-xs text-gray-500">
            <p><strong>📧 Dummy Email:</strong> We sent <span className="text-blue-600 font-semibold">123456</span> to <em>{email}</em></p>
            <p className="mt-1">Use this code in the OTP boxes above.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

