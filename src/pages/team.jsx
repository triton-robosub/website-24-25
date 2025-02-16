import React from "react";

const teamMembers = [
  {
    name: "Irene Joo",
    major: "Mechanical Engineering",
    gradYear: "2025",
    specifics: "Lead Designer",
  },
  {
    name: "John Doe",
    major: "Electrical Engineering",
    gradYear: "2024",
    specifics: "PCB Designer",
  },
  {
    name: "Alice Smith",
    major: "Computer Science",
    gradYear: "2026",
    specifics: "Software Developer",
  },
  {
    name: "Bob Brown",
    major: "Aerospace Engineering",
    gradYear: "2025",
    specifics: "Structural Engineer",
  },
  {
    name: "Emily White",
    major: "Materials Science",
    gradYear: "2024",
    specifics: "Materials Specialist",
  },
];

function Team() {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">Meet the Team</h1>
      <p className="text-gray-600 mb-6">
        The mechanical team is responsible for designing, building, and testing
        the submarine's hardware components.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-100 p-4 rounded-lg shadow-md text-center"
          >
            <div className="w-full h-32 bg-blue-300 rounded mb-4"></div>
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-600">
              {member.major}, {member.gradYear}
            </p>
            <p className="text-blue-500 font-medium">{member.specifics}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
