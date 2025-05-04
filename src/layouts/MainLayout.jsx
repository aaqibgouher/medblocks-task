import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/general/navbar";
import FooterComponent from "../components/general/footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default MainLayout;
