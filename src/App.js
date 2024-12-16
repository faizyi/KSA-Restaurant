import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login/Login";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
