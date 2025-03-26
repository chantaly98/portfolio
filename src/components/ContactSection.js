import React, { useState } from 'react';
import './style.css';
import emailjs from 'emailjs-com';
import useFade from '../utils/useFade';

const ContactSection = () => {
  const [ref, isVisible] = useFade();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;

      const response = await emailjs.sendForm(serviceID, templateID, event.target, userID);

      if (response.status === 200) {
        setSuccess(`Thank you for your message, ${formData.name}!`);
        setFormData({ name: '', email: '', message: '' });  // Clear form
      } else {
        setError('There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      setError('There was a problem sending your message. Please try again.');
    }
  };

return (
    <section id="contact" className="contact-section">
      <div className="form-container">
        <h2>Work with Me</h2>
        <hr/>
        <p>Think we could work well together? Let's connect and make it happen!</p>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
