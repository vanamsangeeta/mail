
import React from 'react';

const CGPA = () => {
  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-6">Academic Performance</h1>
      <div className="bg-white rounded-lg shadow p-6 w-full min-w-[300px]">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Current CGPA</h2>
          <div className="text-4xl font-bold text-blue-600">8.75</div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Semester-wise GPA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <p className="font-semibold">Semester 1</p>
              <p className="text-2xl text-gray-700">8.80</p>
            </div>
            <div className="p-4 border rounded">
              <p className="font-semibold">Semester 2</p>
              <p className="text-2xl text-gray-700">8.70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPA;
