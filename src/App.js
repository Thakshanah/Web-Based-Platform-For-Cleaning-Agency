import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Services from "./Components/services";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/services' element={<Services/>}/> 
      </Routes>
   
      <main>

        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
