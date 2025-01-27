// import { useState } from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import Sidebar from "./components/Sidebar.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { getToken } from "./assets/token";

export const routes = createBrowserRouter([
  { path: "/", element: <Signin /> },
  { path: "/Signup", element: <Signup /> },
]);

export const protectedRoutes = createBrowserRouter([
  { path: "/Sidebar", element: <Sidebar /> },
]);

const queryClient = new QueryClient();

const get_Token = async () => {
  try {
    let value = await getToken;
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};
export default function App() {
  const Token = localStorage.getItem("@authToken");
  //console.log("Token", Token);
  return (
    <>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      {/* <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </Router> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Token === null ? routes : protectedRoutes} />
      </QueryClientProvider>
    </>
  );
}
