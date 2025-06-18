import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      navigate("/reset-password");
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Verify OTP</h2>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP (123456)"
            className="w-full p-3 border border-gray-300 rounded mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Verify OTP
          </button>
        </form>
        {error && (
          <p className="mt-4 text-center text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
