import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Navigate to={"overview"} />,
      },
      {
        path: "/overview",
        element: <div></div>,
      },
      {
        path: "/technology-stack",
        element: <div></div>,
      },
      {
        path: 'work-experience',
        element: <div></div>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
