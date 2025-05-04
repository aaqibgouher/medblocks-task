import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardComponent from "../components/dashboard";
import PatientComponent from "../components/patient";
import AddPatientComponent from "../components/patient/addPatient";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router basename="/medblocks-task">
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardComponent />} />
            <Route path="/patients">
              <Route index element={<PatientComponent />} />
              <Route path="add" element={<AddPatientComponent />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
