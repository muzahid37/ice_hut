import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivetRoute from "./Components/authentication/PrivetRoute";
import { PublicRoutes } from "./Components/Routes/PublicRoutes";
import { PrivetRoutes } from "./Components/Routes/PrivetRoutes";

import Footer from "./Components/Sheared/Footer";
import Header from "./Components/Sheared/Navbar/Header";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AdminRoute from "./Components/authentication/AdminRoute";
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        {PublicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivetRoute />}>
          {PrivetRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
