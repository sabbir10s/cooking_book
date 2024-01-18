import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import SocialLink from "../Components/Shared/SocialLink/SocialLink";

const Main = () => {
  return (
    <div className="font-SourceSans">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <SocialLink />
      <Footer />
    </div>
  );
};

export default Main;
