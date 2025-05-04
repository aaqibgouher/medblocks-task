import React from "react";

const DashboardComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-12">
      {/* Left Column */}
      <div className="text-center md:text-left space-y-6 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Health Data Platform Driven By openEHR & FHIR
        </h1>
        <p className="text-gray-600 text-lg">
          Medblocks is a leading health data platform rooted in openEHR and FHIR
          standards. Accelerate the delivery of compliant, secure healthcare
          products and services with unprecedented speed.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium shadow-md transition duration-300">
            Book a demo
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-md font-medium shadow-sm transition duration-300">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center">
        <img
          src="	https://medblocks.com/assets/e16f03e5-7ef4-46dd-8dfa-d10c9f7df5e0.webp"
          alt="Dashboard Visual"
          className="h-auto rounded-lg w-full basis-0 grow object-contain shrink-0"
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
