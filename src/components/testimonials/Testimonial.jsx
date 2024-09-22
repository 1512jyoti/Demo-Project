import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h3>What Our Clients Say</h3>
      <div className="testimonials-container">
        <blockquote>
          <p>
            "ServicePro transformed my home with their amazing cleaning
            service!"
          </p>
          <footer>- Jane D.</footer>
        </blockquote>
        <blockquote>
          <p>
            "Reliable and professional. Highly recommend their plumbing
            services."
          </p>
          <footer>- Mark S.</footer>
        </blockquote>
        <blockquote>
          <p>
            "ServicePro's electricians are top-notch. They solved my electrical
            issues quickly and efficiently!"
          </p>
          <footer>- Sarah W.</footer>
        </blockquote>

        <blockquote>
          <p>
            "I was amazed by the level of detail and care their landscapers put
            into my garden. Highly recommend!"
          </p>
          <footer>- Robert L.</footer>
        </blockquote>

        <blockquote>
          <p>
            "Their painting service exceeded my expectations. My house looks
            brand new!"
          </p>
          <footer>- Emily H.</footer>
        </blockquote>

        <blockquote>
          <p>
            "Fast, reliable, and affordable. Their pest control service got rid
            of my ant problem in no time!"
          </p>
          <footer>- Daniel K.</footer>
        </blockquote>

        <blockquote>
          <p>
            "ServicePro's HVAC team did a fantastic job. My heating system works
            perfectly now!"
          </p>
          <footer>- Olivia P.</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
