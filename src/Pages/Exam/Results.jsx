


import React from 'react';

const Results = () => {
  const results = [
    {
      semester: 'Fall 2023',
      subjects: [
        {
          code: 'CS201',
          name: 'Data Structures',
          grade: 'A',
          credits: 4,
          status: 'Passed'
        },
        {
          code: 'CS202',
          name: 'Database Management',
          grade: 'A-',
          credits: 4,
          status: 'Passed'
        },
        {
          code: 'CS203',
          name: 'Computer Networks',
          grade: 'B+',
          credits: 3,
          status: 'Passed'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-800">
        Examination Results
      </h1>

      {results.map((semester, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6 mb-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">
            {semester.semester}
          </h2>

          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Course Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {semester.subjects.map((subject, subIndex) => (
                <tr key={subIndex}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    {subject.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    {subject.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {subject.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-700 font-medium">
                    {subject.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Results;
