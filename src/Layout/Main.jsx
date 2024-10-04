import { Outlet } from "react-router-dom";
import NavBar from "../compoents/Shared/Navbar/Navbar";
import Footer from "../compoents/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
           <Footer />
        </div>
    );
};

export default Main;