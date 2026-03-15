import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { About } from './pages/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app__container">
      <Header />
      <Footer />
      <About />
    </div>
  );
}

export default App;
