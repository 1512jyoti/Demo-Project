
import React, { useState } from 'react';
import './Contact.css';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleMessage = () => {
        alert("Thank you! We'll get back to you soon.");
      
      };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section id="contact" className="contact">
        <h3>Contact Us</h3>
        <p>Ready to move? Reach out to us for a free quote.</p>
        <button className="contact-btn" onClick={handleContactClick}>Contact Us</button>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" onClick={handleMessage} className="sendMsgBtn">Send Message</button>
            </form>
            <button className="close-modal-btn" onClick={closeModal}><CloseIcon/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

