// import AboutUs from "../AboutUs/AboutUs";
import Login from "../Sheared/Navbar/Login";
import Register from "../Sheared/Navbar/Register";
import ChocolatesMain from "../Pages/AllChocolate/ChocolatesMain";
// import ChocolateDetails from "./Components/AllChocolate/ChocolateDetails";
import Home from "../Pages/Home/Home";

export const PublicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
  {
    path: "/chocolates",
    name: "ChocolatesMain",
    Component: ChocolatesMain,
  },
  //   { path: "/about", name: "AboutUs", Component: AboutUs },
];
