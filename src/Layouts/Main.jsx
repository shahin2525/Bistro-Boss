import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
