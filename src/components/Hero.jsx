import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="highlight">CHOY LONG</span>
            </h1>
            <h2>Management Information Systems Professional</h2>
            <p className="hero-description">
              Passionate about bridging technology and business through information systems, 
              cybersecurity, cloud computing, and full-stack development.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="src/assets/Long.jpg" 
                  alt="CHOY LONG - MIS Professional" 
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-avatar" style={{display: 'none'}}>👨‍💻</div>
              </div>
              <div className="floating-elements">
                <div className="floating-item" style={{top: '10%', left: '10%'}}>🛡️</div>
                <div className="floating-item" style={{top: '20%', right: '10%'}}>☁️</div>
                <div className="floating-item" style={{bottom: '30%', left: '15%'}}>💻</div>
                <div className="floating-item" style={{bottom: '20%', right: '15%'}}>🗄️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;