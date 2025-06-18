
import React from 'react';

const TimetableView = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="w-full overflow-x-auto min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Class Timetable</h1>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {periods.map((time, index) => (
                <tr key={time} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {days.map((day) => (
                    <td
                      key={`${day}-${time}`}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {/* Example class data - replace with actual data */}
                      {index === 0 && day === 'Monday' ? (
                        <div>
                          <p className="font-medium">Mathematics</p>
                          <p className="text-xs">Room 101</p>
                        </div>
                      ) : index === 1 && day === 'Tuesday' ? (
                        <div>
                          <p className="font-medium">Physics</p>
                          <p className="text-xs">Lab 2</p>
                        </div>
                      ) : index === 2 && day === 'Wednesday' ? (
                        <div>
                          <p className="font-medium">Computer Science</p>
                          <p className="text-xs">Room 205</p>
                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetableView;
