
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const quickLinks = [
    { to: '/courses', label: 'My Courses', icon: '📚' },
    { to: '/cgpa', label: 'CGPA', icon: '📊' },
    { to: '/timetable/view', label: 'Timetable', icon: '📅' },
    { to: '/fees/mypayments', label: 'Payments', icon: '💰' },
  ];

  const announcements = [
    {
      title: 'End Semester Examination Schedule',
      date: '2024-01-15',
      description: 'The end semester examination schedule has been released.',
    },
    {
      title: 'Fee Payment Deadline',
      date: '2024-01-20',
      description: 'Last date for semester fee payment without late fee.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">Welcome to Student Portal</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow min-w-[150px]"
          >
            <div className="text-2xl mb-2">{link.icon}</div>
            <h3 className="font-semibold text-gray-800">{link.label}</h3>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 w-full max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">{announcement.date}</span>
              </div>
              <p className="text-gray-600 mt-1">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
