import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";
import Footer from "./Components/Sheared/Footer";
import Header from "./Components/Sheared/Header";
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
