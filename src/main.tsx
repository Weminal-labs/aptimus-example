import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { CallbackPage } from "./CallbackPage";
import { Homepage } from "./HomePage";
import { AptimusFlowProvider } from "aptimus-sdk-test/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/callback",
    element: <CallbackPage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AptimusFlowProvider apiKey="aptimus_apikey_ec23ee0a581fca24263243bc89f77bdf">
    <RouterProvider router={router} />
  </AptimusFlowProvider>
);
