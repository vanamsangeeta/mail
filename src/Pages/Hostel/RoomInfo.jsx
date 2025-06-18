

import React from 'react';

const RoomInfo = () => {
  const roomDetails = {
    roomNumber: 'B-304',
    block: 'B Block',
    floor: '3rd Floor',
    type: '3-Seater AC',
    occupancy: {
      current: 3,
      total: 3
    },
    amenities: [
      'Air Conditioning',
      'Study Table',
      'Wardrobe',
      'Bed with Mattress',
      'Wi-Fi Access',
      'Attached Bathroom'
    ],
    roommates: [
      {
        name: 'John Smith',
        id: 'CSE2021001',
        year: '3rd Year',
        contact: '+91 9876543210'
      },
      {
        name: 'Rahul Kumar',
        id: 'CSE2021015',
        year: '3rd Year',
        contact: '+91 9876543211'
      },
      {
        name: 'David Wilson',
        id: 'CSE2021032',
        year: '3rd Year',
        contact: '+91 9876543212'
      }
    ],
    maintenance: {
      lastCleaning: '2024-03-15',
      nextCleaning: '2024-03-22',
      pendingIssues: [
        {
          issue: 'AC Service Due',
          reportDate: '2024-03-10',
          status: 'Scheduled',
          scheduledDate: '2024-03-25'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-auto">
      <div className="container mx-auto p-4">
        {/* --- Your Original Code Begins --- */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Room Information</h1>
          <p className="text-gray-600 mt-2">Details about your hostel accommodation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Room Number</span>
                <span className="font-medium">{roomDetails.roomNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Block</span>
                <span className="font-medium">{roomDetails.block}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Floor</span>
                <span className="font-medium">{roomDetails.floor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type</span>
                <span className="font-medium">{roomDetails.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Occupancy</span>
                <span className="font-medium">
                  {roomDetails.occupancy.current}/{roomDetails.occupancy.total}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
            <ul className="space-y-2">
              {roomDetails.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Maintenance</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Last Cleaning</p>
                <p className="font-medium">{roomDetails.maintenance.lastCleaning}</p>
              </div>
              <div>
                <p className="text-gray-600">Next Cleaning</p>
                <p className="font-medium">{roomDetails.maintenance.nextCleaning}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Pending Issues</p>
                {roomDetails.maintenance.pendingIssues.map((issue, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-gray-800">{issue.issue}</p>
                    <p className="text-sm text-gray-600">
                      Reported: {issue.reportDate}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-yellow-600">{issue.status}</span>
                      <span className="text-sm text-gray-600">
                        Scheduled: {issue.scheduledDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Roommates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roomDetails.roommates.map((roommate, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {roommate.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{roommate.name}</h3>
                    <p className="text-sm text-gray-600">{roommate.id}</p>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-sm text-gray-600">Year: {roommate.year}</p>
                  <p className="text-sm text-gray-600">
                    Contact: {roommate.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Report Issue
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200">
            Request Room Change
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200">
            View Floor Plan
          </button>
        </div>
        {/* --- Your Original Code Ends --- */}
      </div>
    </div>
  );
};

export default RoomInfo;
