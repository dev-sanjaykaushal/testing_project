import react,{useState} from "react"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import NoPage from "./Component.js/NoPage";
import RegisterComponent from "./Component.js/Login/RegisterComponent";
import PrivacyPage from "./Component.js/Login/PrivacyPage";
import AddTrip from "./Component.js/AfterLogin/AddTrip";
import MenuAppBar from "./Component.js/AfterLogin/MenuAppBar.jsx";
import Sidebarcomponent from "./Component.js/AfterLogin/Sidebarcomponent.jsx";
import './App.css'
import AddYourVehicle from "./Component.js/AfterLogin/AddYourVehicle.jsx";
import Dashboard from "./Component.js/AfterLogin/Dashboard.jsx";
function App() {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
    {isLogin ?
    <>
      <MenuAppBar />
      <div className="main-layout-wraper">
      <Sidebarcomponent />
      <Routes>
      <Route path="/addtrip" element={<AddTrip />} />
      <Route path="/addvehical" element={<AddYourVehicle />} />
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
      </>
      :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/privacy" element={<PrivacyPage />} />          
          <Route path="*" element={<NoPage />} />
        </Routes>
    }
      </BrowserRouter>
    </div>
  );
}

export default App;
