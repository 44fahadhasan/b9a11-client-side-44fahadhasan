import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../pages/shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  } else if (loading) {
    return <Spinner />;
  }

  return <Navigate to="/Login" state={location.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
