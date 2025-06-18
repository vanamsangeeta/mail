
import React from 'react';

const AttendanceFilter = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Attendance Report</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Monthly</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Period</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Till Now</button>
        <label className="flex items-center gap-1">
          <input type="checkbox" className="form-checkbox" />
          Exclude Other Subjects
        </label>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Held</th>
            <th className="border px-4 py-2">Attended</th>
            <th className="border px-4 py-2">%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Mathematics</td>
            <td className="border px-4 py-2">40</td>
            <td className="border px-4 py-2">38</td>
            <td className="border px-4 py-2">95%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Physics</td>
            <td className="border px-4 py-2">38</td>
            <td className="border px-4 py-2">35</td>
            <td className="border px-4 py-2">92%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceFilter;