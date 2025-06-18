
import React from 'react';

const Counselling = () => {
  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Counselling Services</h1>
      <div className="bg-white rounded-lg shadow p-6 w-full min-w-[300px]">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Academic Counselling</h2>
          <p className="text-gray-600">
            Schedule appointments with your academic advisor for guidance on course selection,
            academic planning, and career development.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Personal Counselling</h2>
          <p className="text-gray-600">
            Confidential counselling services are available to support your mental health
            and personal well-being.
          </p>
        </div>

        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
