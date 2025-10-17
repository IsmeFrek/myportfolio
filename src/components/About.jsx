import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Management Information Systems Professional</h3>
            <p>
              I am a dedicated Management Information Systems professional with a comprehensive 
              understanding of how technology drives business success. My expertise spans across 
              cybersecurity fundamentals, cloud computing with AWS, and network defense strategies.
            </p>
            <p>
              With hands-on experience in ethical hacking, graphic design, and full-stack development, 
              I bring a unique blend of technical skills and business acumen to every project. 
              I am passionate about creating secure, efficient, and user-friendly solutions that 
              bridge the gap between technology and business objectives.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>Major in Management Information Systems</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="icon">🛡️</span>
                <div>
                  <h4>Cybersecurity</h4>
                  <p>Network Defense & Ethical Hacking</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="icon">☁️</span>
                <div>
                  <h4>Cloud Computing</h4>
                  <p>AWS Cloud Fundamentals</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="icon">💻</span>
                <div>
                  <h4>Development</h4>
                  <p>Full-Stack Web & Desktop Applications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technical Skills</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Programming Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Design Tools</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Database Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;