
import React from "react";

const academicEvents = [
  {
    date: "2025-06-20",
    title: "Semester 1 Classes Start",
    type: "Announcement",
  },
  {
    date: "2025-07-15",
    title: "Last Date for Add/Drop Courses",
    type: "Deadline",
  },
  {
    date: "2025-08-10",
    title: "Mid-Term Exams Begin",
    type: "Exam",
  },
  {
    date: "2025-08-20",
    title: "Holiday – Independence Day",
    type: "Holiday",
  },
  {
    date: "2025-10-01",
    title: "End-Semester Exams Start",
    type: "Exam",
  },
  {
    date: "2025-11-15",
    title: "Semester Break Begins",
    type: "Holiday",
  },
];

const getColor = (type) => {
  switch (type) {
    case "Announcement":
      return "text-green-500";
    case "Holiday":
      return "text-red-500";
    case "Exam":
      return "text-blue-600";
    case "Deadline":
      return "text-yellow-500";
    default:
      return "text-gray-700";
  }
};

const Calender = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Academic Calendar - 2025</h1>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="w-full min-w-[500px] text-left border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Event</th>
              <th className="p-2 border">Type</th>
            </tr>
          </thead>
          <tbody>
            {academicEvents.map((event, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-2 border">{event.date}</td>
                <td className="p-2 border font-medium">{event.title}</td>
                <td className={`p-2 border font-semibold ${getColor(event.type)}`}>
                  {event.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calender;
