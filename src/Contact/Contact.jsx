import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="ContactUs" id="contact">
      <div className="form-container">
        <h2>Volunteer Form</h2>
        <form>
          {/* Full Name */}
          <label htmlFor="fullname">Full Name *</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            placeholder="Enter your full name"
          />

          {/* Email */}
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          {/* Phone Number */}
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
          />

          {/* Area of Interest */}
          <label htmlFor="interest">Area of Interest *</label>
          <select id="interest" name="interest" required>
            <option value="">-- Select an option --</option>
            <option value="teaching">Teaching / Education</option>
            <option value="healthcare">Healthcare Assistance</option>
            <option value="environment">Environmental Activities</option>
            <option value="fundraising">Fundraising & Events</option>
            <option value="socialmedia">Social Media & Outreach</option>
            <option value="fieldwork">Field Work</option>
          </select>

          {/* Location */}
          <label htmlFor="location">Your Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            placeholder="Enter your city or area"
          />

          {/* Motivation */}
          <label htmlFor="motivation">
            Why do you want to volunteer with us?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows="4"
            placeholder="Write a short answer..."
          />

          {/* Agreement Checkbox */}
          <label className="checkbox-label ">
            <input type="checkbox" required /> I agree to be contacted by Planet
            Heros Foundation.
          </label>

          {/* Submit */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
