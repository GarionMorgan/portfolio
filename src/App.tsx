import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
