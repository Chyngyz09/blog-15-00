import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutMe/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";

// Reactjs code snippet

const App = () => {
  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>

    </div>
  );
};

export default App;

// jsx = java script + HTML

// npx create-react-app .
