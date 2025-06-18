
import React, { useState } from 'react';

const sections = {
  "Personal Details": {
    firstName: "JOHN",
    middleName: "ALEX",
    lastName: "DOE",
    gender: "Male",
    fatherName: "ROBERT DOE",
    motherName: "MARY DOE",
    dob: "01-01-2000",
    bloodGroup: "B+ve",
    maritalStatus: "Single",
    email: "john.doe@example.com",
    phoneNumber: "+1 9876543210",
    rollNumber: "20CS1001",
    parentPhone: "+1 8765432109",
    placeOfBirth: "NEW YORK",
    religion: "Christian",
    casteCategory: "OBC",
    admissionDate: "15-08-2018",
    program: "UG",
    regulation: "R20",
    campus: "MAIN CAMPUS",
    admissionType: "Regular",
    hostelStatus: "Hosteller",
    universityId: "CAM123456",
  },
  "Qualification Details": {
    highestQualification: "B.Tech CSE",
    passingYear: "2022",
    percentage: "85%",
    institute: "XYZ University",
  },
  "Identity": {
    aadharNumber: "1234-5678-9012",
    nationality: "Indian",
  },
  "Publications": {
    totalPublications: 3,
    journals: "International Journal of CS",
    conferences: "AI Conf 2022",
  },
  "Activities": {
    sports: "Basketball, Athletics",
    cultural: "Drama Club, Music Fest",
    social: "NSS Volunteer",
  },
  "Awards": {
    merit: "Topper Award 2022",
    excellence: "Techfest Hackathon Winner",
  },
  "Courses": {
    core: "DSA, OS, DBMS",
    electives: "AI, Blockchain",
  },
  "Hostel": {
    block: "B-Block",
    roomNumber: "203",
    warden: "Mr. John Smith",
  },
};

const ProfileDetails = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full overflow-x-auto min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-4">
        {Object.entries(sections).map(([sectionTitle, data]) => (
          <div key={sectionTitle} className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left px-6 py-4 font-semibold bg-blue-100 hover:bg-blue-200 transition"
              onClick={() => toggleSection(sectionTitle)}
            >
              {sectionTitle}
            </button>

            {openSection === sectionTitle && (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
                {Object.entries(data).map(([label, value]) => (
                  <div key={label} className="bg-gray-50 p-4 rounded shadow-sm border">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {label.replace(/([A-Z])/g, ' $1')}:
                    </p>
                    <p className="text-base font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
