// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import "./index.css";
import routes from "./routes/PublicRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <ThemeProvider>
    <RouterProvider router={routes} />
  </ThemeProvider>
  // </React.StrictMode>
);
