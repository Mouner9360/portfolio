import React, { useState, useEffect } from 'react';
import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Hero from './Hero';

function App() {
  const [currentComponent, setCurrentComponent] = useState('about');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (component) => {
    setCurrentComponent(component);
    setMobileMenuOpen(false);
  };

  return (
    <div className="personal-profile-app">
      <div className="header-navigation">
        <div className="nav-inner">
          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`navigation-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <p
              className={currentComponent === 'about' ? 'nav-active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About Me
            </p>
            <p
              className={currentComponent === 'portfolio' ? 'nav-active' : ''}
              onClick={() => handleNavClick('portfolio')}
            >
              Portfolio
            </p>
            <p
              className={currentComponent === 'resume' ? 'nav-active' : ''}
              onClick={() => handleNavClick('resume')}
            >
              Resume
            </p>
            <p
              className={currentComponent === 'contact' ? 'nav-active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </p>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      <div className="main-content-area">
        {currentComponent === 'about' && (
          <>
            <Hero onNavigate={handleNavClick} />
            <About />
          </>
        )}
        {currentComponent === 'portfolio' && <Portfolio />}
        {currentComponent === 'resume' && <Resume />}
        {currentComponent === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
