import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
