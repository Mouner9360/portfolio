import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const titles = [
  'AI Engineer',
  'ML Enthusiast',
  'Full-Stack Builder',
  'Data Science Graduate',
];

function Hero({ onNavigate }) {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      // Typing forward
      setDisplayText(currentTitle.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentTitle.length) {
        // Pause then start deleting
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
    } else {
      // Deleting
      setDisplayText(currentTitle.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [displayText, titleIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Mounir <span className="accent">Wissa</span>
        </h1>
        <p className="hero-typing">
          {displayText}
          <span className="cursor" />
        </p>
        <p className="hero-tagline">
          Building intelligent solutions at the intersection of AI, data, and software engineering.
        </p>
        <div className="hero-cta">
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => onNavigate('portfolio')}
          >
            View My Work
          </button>
          <button
            className="hero-btn hero-btn-secondary"
            onClick={() => onNavigate('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
