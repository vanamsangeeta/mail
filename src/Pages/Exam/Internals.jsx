

import React from 'react';

const Internals = () => {
  const subjects = [
    {
      name: 'Data Structures',
      code: 'CS201',
      internals: [
        { test: 'Internal 1', marks: 18, maxMarks: 20 },
        { test: 'Internal 2', marks: 17, maxMarks: 20 },
        { test: 'Internal 3', marks: 19, maxMarks: 20 }
      ]
    },
    {
      name: 'Database Management',
      code: 'CS202',
      internals: [
        { test: 'Internal 1', marks: 16, maxMarks: 20 },
        { test: 'Internal 2', marks: 18, maxMarks: 20 },
        { test: 'Internal 3', marks: 17, maxMarks: 20 }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50 min-h-screen overflow-x-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-800">
        Internal Assessment Marks
      </h1>

      <div className="space-y-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 w-full overflow-x-auto">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-indigo-700">
                {subject.name}
              </h2>
              <p className="text-gray-600">Course Code: {subject.code}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Test
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Marks Obtained
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Maximum Marks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subject.internals.map((test, testIndex) => (
                    <tr key={testIndex}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {test.test}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {test.marks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {test.maxMarks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {((test.marks / test.maxMarks) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internals;

