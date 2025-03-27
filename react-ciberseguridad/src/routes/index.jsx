import {Routes,Route,Router} from "react-router"
import Home from "../pages/Home"
import Navbar from "../components/Navbar";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

const Rutas = () => {
  return (
<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
</>

  );
}

export default Rutas;
