import React, { useState } from "react";

const EventsCompetitions = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [winners] = useState([
    { id: 1, name: "Photography Contest", winner: "John Doe" },
    { id: 3, name: "Drama Skit", winner: "Divya Sharma" },
  ]);

  const events = [
    {
      id: 1,
      name: "Photography Contest",
      description: "Submit your best shot to win.",
      date: "2025-07-10",
    },
    {
      id: 2,
      name: "Coding Hackathon",
      description: "24-hour challenge to solve real-world problems.",
      date: "2025-08-01",
    },
    {
      id: 3,
      name: "Drama Skit",
      description: "Showcase your acting skills with your team.",
      date: "2025-08-20",
    },
  ];

  const handleRegister = (id) => {
    if (!registeredEvents.includes(id)) {
      setRegisteredEvents([...registeredEvents, id]);
    }
  };

  const handleDownload = (eventName, winnerName) => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Certificate of Achievement\n\nThis is to certify that ${winnerName} has won the event "${eventName}".\n\nCongratulations!\n\n- University Club Council`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${winnerName}_${eventName}_Certificate.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-x-hidden">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Events & Competitions
      </h2>

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 border rounded-lg bg-white shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-700">
                {event.name}
              </h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Date: {event.date}
              </p>
            </div>
            <button
              onClick={() => handleRegister(event.id)}
              disabled={registeredEvents.includes(event.id)}
              className={`mt-4 px-4 py-2 text-white rounded ${
                registeredEvents.includes(event.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {registeredEvents.includes(event.id)
                ? "Registered"
                : "Register"}
            </button>
          </div>
        ))}
      </div>

      {/* Winners */}
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Winners & Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className="p-4 border-l-4 border-green-500 bg-white shadow rounded-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-green-700">
                {winner.name}
              </h3>
              <p className="text-gray-700 mt-1">
                Winner: <strong>{winner.winner}</strong>
              </p>
            </div>
            <button
              onClick={() => handleDownload(winner.name, winner.winner)}
              className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Download Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCompetitions;
