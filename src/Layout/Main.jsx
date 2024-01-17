import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-SourceSans">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
