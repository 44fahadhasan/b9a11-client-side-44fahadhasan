import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NabBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
