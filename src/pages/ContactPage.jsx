import React, { useState } from 'react';
import '../styles/ContactPage.css'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newsletter: false,
    subject: '',
    details: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState({
    text: '',
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: check if any of the required fields are empty.
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.details) {
      setSubmissionMessage({
        text: 'Error: All required fields must be filled out.',
        isError: true,
      });
      return;
    }
    console.log('Form submitted:', formData);

    // Provide a success message to the user.
    setSubmissionMessage({
      text: 'You have successfully sent your message.',
      isError: false,
    });
    // Reset the form fields to their initial empty state for the next submission.
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      newsletter: false,
      subject: '',
      details: '',
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-info-section">
        <h2>LUNA music</h2>
        <p>
          <a href="https://www.google.com/maps/place/5202+N+College+Ave,+Indianapolis,+IN+46220/@39.8470921,-86.1487419,17z/data=!3m1!4b1!4m6!3m5!1s0x886b53c5140cecd7:0x3321e27951aa1ef!8m2!3d39.847088!4d-86.146167!16s%2Fg%2F11c5kglt08?entry=tts" target="_blank" rel="noopener noreferrer">
            5202 N. College Ave
            <br />
            Indianapolis, IN 46220
          </a>
        </p>
        <h3>Phone</h3>
        <p>
          <a href="tel:317-283-5862">(317) 283-5862</a>
        </p>
        <h3>Hours of Operation</h3>
        <p>
          Monday-Saturday: <strong>10am - 7pm</strong>
          <br />
          Sunday: <strong>11am - 6pm</strong>
        </p>
      </div>
      
      <div className="contact-form-section">
        <h2>Send a message to the LUNA crew below!</h2>
        
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="firstName">Your Name (required)</label>
          </div>
          <div className="form-name-fields">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="sr-only">Last Name (required)</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email (required)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">Sign up for news and updates</label>
          </div>

          <div className="form-group">
            <label htmlFor="subject">What can we help you with? (required)</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="vinyl-sale">Vinyl Sale/Trade Inquiry</option>
              <option value="preorder">Pre-order Question</option>
              <option value="event">Event Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="details">Give us some deets! (required)</label>
            <textarea
              id="details"
              name="details"
              rows="5"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        {submissionMessage.text && (
          <p className={`submission-message ${submissionMessage.isError ? 'error' : 'success'}`}>
            {submissionMessage.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;