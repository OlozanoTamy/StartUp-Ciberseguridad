import {Routes,Route,Router} from "react-router"
import Home from "../pages/Home"
import Navbar from "../components/Navbar";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AdminUsuarios from "../components/AdminUsuarios.jsx";
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
      <Route path="/admin" element={<AdminUsuarios />} />
    </Routes>
</>

  );
}

export default Rutas;
