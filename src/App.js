import About from "./pages/About";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import NoPage from "./Component.js/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>          
          <Route path="/pricing" element={<Pricing/>}/> 
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
