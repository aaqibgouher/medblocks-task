import { useState } from "react";
import Toast from "../../general/toast";
import { usePGlite } from "@electric-sql/pglite-react";
import { useNavigate } from "react-router-dom";

const AddPatientComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    symptoms: "",
    address: "",
  });
  const db = usePGlite();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check for empty required fields
      const { name, age, gender, email, symptoms, address } = formData;

      //   validations
      if (!name || !age || !gender || !email || !symptoms || !address) {
        throw "All fiels are required";
      }

      //   call service to add
      await db.query(
        `INSERT INTO patients (id, name, age, gender, email, address, symptoms)
         VALUES ($1, $2, $3, $4, $5, $6, $7);`,
        [crypto.randomUUID(), name, +age, gender, email, address, symptoms]
      );

      Toast.success("Patient added successfully");
      navigate("/patients");
    } catch (error) {
      Toast.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter patient name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Age"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Symptoms
            </label>
            <input
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter symptoms"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter address"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium shadow-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientComponent;
