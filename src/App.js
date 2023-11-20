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
import './App.css'
import AddYourVehicle from "./Component.js/AfterLogin/AddYourVehicle.jsx";
import Dashboard from "./Component.js/AfterLogin/Dashboard.jsx";
import VehicleList from "./Component.js/AfterLogin/VehicleList.jsx";
import TripList from "./Component.js/AfterLogin/TripList.jsx";
import YourExpenses from "./Component.js/AfterLogin/YourExpenses.jsx";
import Reports from "./Component.js/AfterLogin/Reports.jsx";
import EmailTamplets from "./Component.js/AfterLogin/EmailTamplets.jsx";
import Attendance from "./Component.js/AfterLogin/Attendance.jsx";
import ProfileSetting from "./Component.js/AfterLogin/ProfileSetting.jsx";
import TeamDashboard from "./Component.js/AfterLogin/TeamDashboard.jsx";
import Permissons from "./Component.js/AfterLogin/Permissons.jsx";
import MenuAppBar from "./Component.js/AfterLogin/MenuAppBar.jsx";
import Sidebarcomponent from "./Component.js/AfterLogin/Sidebarcomponent.jsx";
import TeamAttendance from "./Component.js/AfterLogin/TeamAttendance.jsx";
import CreateEmail from "./Component.js/AfterLogin/CreateEmail.jsx";


function App() {
  const [isLogin, setisLogin] = useState(true);

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
    {isLogin ?
    <>
    <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <MenuAppBar collapsed={isSidebarCollapsed} onClick={handleToggleSidebar} />      
    </div>
      <div className="main-layout-wraper">
      <Sidebarcomponent collapsed={isSidebarCollapsed}  />
      <Routes>
      <Route path="/" element={<Dashboard collapsed={isSidebarCollapsed} />} />
      <Route path="/addtrip" element={<AddTrip collapsed={isSidebarCollapsed}/>} />
      <Route path="/addvehical" element={<AddYourVehicle collapsed={isSidebarCollapsed} />} />
      <Route path="/vehicleList" element={<VehicleList collapsed={isSidebarCollapsed} />} />
      <Route path="/triplist" element={<TripList collapsed={isSidebarCollapsed} />} />
      <Route path="/expenses" element={<YourExpenses collapsed={isSidebarCollapsed} />} />
      <Route path="/reports" element={<Reports collapsed={isSidebarCollapsed} />} />
      <Route path="/emailtamlets" element={<EmailTamplets collapsed={isSidebarCollapsed} />} />
      <Route path="/attendance" element={<Attendance collapsed={isSidebarCollapsed} />} />
      <Route path="/editProfile" element={<ProfileSetting />} />      
      <Route path="/teamDashboard" element={<TeamDashboard collapsed={isSidebarCollapsed} />} />      
      <Route path="/permisson" element={<Permissons collapsed={isSidebarCollapsed}/>} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/teamAttendance" element={<TeamAttendance />} /> 
      <Route path="/createemail" element={<CreateEmail collapsed={isSidebarCollapsed} />} /> 
      
     
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
