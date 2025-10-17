import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to discuss your next project or opportunity? Let's connect!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities, 
              collaborative projects, or just connecting with fellow professionals 
              in the MIS and technology space.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>choylong23@example.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>+855 (888) 844-1447</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-info">
                  <h4>LinkedIn</h4>
                  <p><a href="https://www.linkedin.com/in/frek-benjamin-9340672b4" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/frek-benjamin</a></p>
                </div>
              </div>
            </div>
            <div className="availability">
              <h4>Availability</h4>
              <p>Currently available for:</p>
              <ul>
                <li>Full-time opportunities</li>
                <li>Freelance projects</li>
                <li>Consulting work</li>
                <li>Collaboration opportunities</li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="freelance-project">Freelance Project</option>
                <option value="collaboration">Collaboration</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;