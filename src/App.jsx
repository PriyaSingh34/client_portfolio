import React from "react";
import Header from "./components/Header";
// import Home from "./components/Home";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import MainPage from "./components/MainPage.jsx"
import Project1 from "./components/Project1"; // Import Project1 component
import Project2 from "./components/Project2.jsx";
import Project3 from "./components/Project3.jsx";
import Project4 from "./components/Project4.jsx";
import Project5 from "./components/Project5.jsx";
import Project6 from "./components/Project6.jsx";
import Project7 from "./components/Project7.jsx";
import Project8 from "./components/Project8.jsx";
import Project9 from "./components/Project9.jsx";
import Project10 from "./components/Project10.jsx";
// import Project2 from "./components/Project2"; // Import Project2 component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="w-full">
        {/* <Header /> */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/project1" element={<Project1 />} />
            <Route path="/project/project2" element={<Project2 />} />
            <Route path="/project/project3" element={<Project3 />} />
            <Route path="/project/project4" element={<Project4 />} />
            <Route path="/project/project5" element={<Project5 />} />
            <Route path="/project/project6" element={<Project6 />} />
            <Route path="/project/project7" element={<Project7 />} />
            <Route path="/project/project8" element={<Project8 />} />
            <Route path="/project/project9" element={<Project9 />} />
            <Route path="/project/project10" element={<Project10 />} />
            {/* <Route path="/project2" element={<Project2 />} /> */}
            {/* Add routes for other project components similarly */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
