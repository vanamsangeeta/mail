import React, { useState } from "react";

const ViewJoinClub = () => {
  const [joinedClubs, setJoinedClubs] = useState([]);

  const clubs = [
    {
      id: 1,
      name: "Photography Club",
      description: "Capture and showcase creativity through lenses.",
    },
    {
      id: 2,
      name: "Coding Club",
      description: "Explore DSA, Web Dev, Hackathons, and more.",
    },
    {
      id: 3,
      name: "Music Club",
      description: "For all lovers of melody and rhythm.",
    },
    {
      id: 4,
      name: "Drama Club",
      description: "Theatre, expressions, and stage plays.",
    },
  ];

  const handleJoin = (id) => {
    if (!joinedClubs.includes(id)) {
      setJoinedClubs([...joinedClubs, id]);
    }
  };

  const getJoinedClubDetails = () =>
    clubs.filter((club) => joinedClubs.includes(club.id));

  return (
    <div className="p-6 bg-gray-100 min-h-screen overflow-x-hidden">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Available Clubs
      </h1>

      {/* Club List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="border p-5 rounded-xl shadow bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-blue-600">
                {club.name}
              </h2>
              <p className="text-gray-700 my-2">{club.description}</p>
            </div>
            <button
              onClick={() => handleJoin(club.id)}
              disabled={joinedClubs.includes(club.id)}
              className={`px-4 py-2 rounded-md mt-2 ${
                joinedClubs.includes(club.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white font-medium`}
            >
              {joinedClubs.includes(club.id) ? "Joined" : "Join Club"}
            </button>
          </div>
        ))}
      </div>

      {/* Joined Clubs Section */}
      {joinedClubs.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Your Joined Clubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getJoinedClubDetails().map((club) => (
              <div
                key={club.id}
                className="border-l-4 border-green-500 bg-white p-4 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-green-700">
                  {club.name}
                </h3>
                <p className="text-gray-700">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewJoinClub;
