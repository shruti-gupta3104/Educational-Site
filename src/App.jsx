import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import CardPage from './component/CardPage';


function App() {


  return (
    <>
   
   <Navbar />
   <Routes >
  
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/course" element={<Course/>} />
      <Route path="/course/:id" element={<CardPage />} />

   </Routes>
   <Footer />

    </>
  )
}

export default App
