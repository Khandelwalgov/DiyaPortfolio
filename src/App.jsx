import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (id) => {
    // This will be implemented in future steps
    console.log(`Navigating to section: ${id}`);
  };

  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Experiences />
      </main>
    </div>
  );
};

export default App;