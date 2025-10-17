import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleSection, setVisibleSection] = useState('');

  const skillCategories = {
    cybersecurity: {
      title: 'Cybersecurity & Networking',
      icon: '🛡️',
      skills: [
        { name: 'Cyber Fundamentals', level: 85 },
        { name: 'Cisco Network Defense', level: 80 },
        { name: 'Cisco Ethical Hacking', level: 75 },
        { name: 'Networking', level: 85 },
        { name: 'Kali Linux', level: 70 },
        { name: 'VMware', level: 80 }
      ]
    },
    cloud: {
      title: 'Cloud & Systems',
      icon: '☁️',
      skills: [
        { name: 'AWS Cloud', level: 75 },
        { name: 'Windows Server', level: 80 },
        { name: 'Ubuntu Linux', level: 75 },
        { name: 'Computer Maintenance', level: 90 },
        { name: 'System Administration', level: 85 }
      ]
    },
    programming: {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C# Windows Forms', level: 85 },
        { name: 'C# Web API', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      icon: '🌐',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript ES6+', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    database: {
      title: 'Database Management',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Microsoft SQL Server', level: 85 },
        { name: 'Database Design', level: 80 },
        { name: 'Query Optimization', level: 75 }
      ]
    },
    design: {
      title: 'Design & UI/UX',
      icon: '🎨',
      skills: [
        { name: 'Adobe Photoshop', level: 85 },
        { name: 'Adobe Illustrator', level: 80 },
        { name: 'Adobe Premiere Pro', level: 75 },
        { name: 'Adobe InDesign', level: 70 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Figma', level: 85 }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, isVisible, delay }) => (
    <div className="skill-item" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ '--skill-level': `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Comprehensive expertise across multiple domains of information technology
        </p>
        
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <div key={key} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill}
                    isVisible={visibleSection === 'skills'}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <h3>Core Competencies</h3>
          <div className="competency-tags">
            <span className="tag">Information Systems Management</span>
            <span className="tag">Cybersecurity</span>
            <span className="tag">Cloud Computing</span>
            <span className="tag">Full-Stack Development</span>
            <span className="tag">Database Administration</span>
            <span className="tag">UI/UX Design</span>
            <span className="tag">Network Security</span>
            <span className="tag">System Administration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;