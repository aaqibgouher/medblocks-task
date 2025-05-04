import { useLiveQuery, usePGlite } from "@electric-sql/pglite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientComponent = () => {
  const db = usePGlite();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getPatients = async () => {
    try {
      console.log(1);
      const res = await db.query(
        "SELECT * FROM patients ORDER BY created_at DESC"
      );
      setPatients(res?.rows);
    } catch (error) {
      console.log(error, "from error ---");
    }
  };

  useEffect(() => {
    getPatients();
  }, [db]);

  // Filtered patients based on search term
  const filteredPatients = patients.filter((patient) => {
    const lower = searchTerm.toLowerCase();
    return (
      patient.name.toLowerCase().includes(lower) ||
      patient.email?.toLowerCase().includes(lower) ||
      patient.symptoms?.toLowerCase().includes(lower)
    );
  });

  return (
    <div className="px-6 py-8">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl text-gray-800">Patients</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search patients..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow-md transition"
            onClick={() => navigate("/patients/add")}
          >
            Add Patient
          </button>
        </div>
      </div>

      {/* Patients Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Symptoms</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients?.map((patient, index) => (
              <tr
                key={patient.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 text-gray-700">{patient.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {patient.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{patient.age}</td>
                <td className="px-6 py-4 text-gray-700">{patient.gender}</td>
                <td className="px-6 py-4 text-gray-700">{patient.email}</td>
                <td className="px-6 py-4 text-gray-700">{patient.symptoms}</td>
                <td className="px-6 py-4 text-gray-700">{patient.address}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline transition">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filteredPatients.length === 0 && (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientComponent;
