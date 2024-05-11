import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AssignmentsPage from "../pages/AssignmentsPage/AssignmentsPage";
import CreateAssignmentsPage from "../pages/CreateAssignmentsPage/CreateAssignmentsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyAttemptedAssignmentsPage from "../pages/MyAttemptedAssignmentsPage/MyAttemptedAssignmentsPage";
import PendingAssignmentsPage from "../pages/PendingAssignmentsPage/PendingAssignmentsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Assignments",
        element: <AssignmentsPage />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },
      {
        path: "Create-Assignments",
        element: (
          <PrivateRoute>
            <CreateAssignmentsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "Pending-Assignments",
        element: (
          <PrivateRoute>
            <PendingAssignmentsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-Attempted-Assignments",
        element: (
          <PrivateRoute>
            <MyAttemptedAssignmentsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
