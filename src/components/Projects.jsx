import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Security Dashboard',
      description: 'A comprehensive cybersecurity monitoring dashboard built with React and C# Web API, featuring real-time threat detection and network analysis.',
      technologies: ['React', 'C# Web API', 'MySQL', 'Chart.js'],
      category: 'Cybersecurity',
      icon: '🛡️',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Manager',
      description: 'AWS-based cloud management system for monitoring resources, costs, and performance metrics across multiple environments.',
      technologies: ['AWS', 'Python', 'MongoDB', 'React'],
      category: 'Cloud Computing',
      icon: '☁️',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'MIS Analytics Platform',
      description: 'Management Information System for business intelligence and analytics, featuring data visualization and reporting capabilities.',
      technologies: ['Angular', 'Node.js', 'MSSQL', 'Power BI'],
      category: 'Information Systems',
      icon: '📊',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Network Defense Simulator',
      description: 'Educational platform for cybersecurity training with simulated network attacks and defense scenarios.',
      technologies: ['Python', 'C++', 'VMware', 'Kali Linux'],
      category: 'Education',
      icon: '🎯',
      status: 'Planning'
    },
    {
      id: 5,
      title: 'Design System & UI Kit',
      description: 'Comprehensive design system created with Adobe tools and Figma, featuring reusable components and brand guidelines.',
      technologies: ['Figma', 'Adobe XD', 'Adobe Illustrator', 'CSS'],
      category: 'Design',
      icon: '🎨',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Database Management Tool',
      description: 'Cross-platform database administration tool supporting MySQL, MongoDB, and MSSQL with advanced query optimization.',
      technologies: ['C# Windows Forms', 'MySQL', 'MongoDB', 'MSSQL'],
      category: 'Database',
      icon: '🗄️',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'var(--success-color)';
      case 'In Progress': return 'var(--warning-color)';
      case 'Planning': return 'var(--info-color)';
      default: return 'var(--primary-color)';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing practical applications of my technical expertise
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-status" style={{ color: getStatusColor(project.status) }}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-primary">Live Demo</button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Interested in collaborating?</h3>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;