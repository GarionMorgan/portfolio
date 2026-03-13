import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app__container">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
