import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../assets/hero.jpg'; // Ensure the image path is correct

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pre-required message template for clarity and professionalism
    const preRequiredTemplate = `*New Website Inquiry*%0A` +
      `Dear Ravindra Kumar Team,%0A` +
      `A new contact form submission has been received. Please review the details below:%0A` +
      `----------------------------------------%0A`;

    // User-submitted data with clean formatting
    const userData = `*Name*: ${formData.name}%0A` +
      `*Email*: ${formData.email}%0A` +
      `*Subject*: ${formData.subject}%0A` +
      `*Message*: ${formData.message}%0A` +
      `----------------------------------------%0A` +
      `Thank you for your attention!`;

    // Combine template and user data
    const fullMessage = preRequiredTemplate + userData;

    // WhatsApp number
    const whatsappNumber = '+919060804572';

    // WhatsApp API URL with encoded message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Confirmation alert
    alert('Your inquiry has been opened in WhatsApp with a pre-filled message. Please hit "Send" to complete submission. We will respond within 48 hours.');

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-blue-600/70 hover:bg-blue-600/60 transition-opacity duration-700 ease-in-out"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-serif font-bold text-center animate-slide-up">
          Partner With Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Contact Information */}
        <div className="lg:w-1/3 p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 border-l-4 border-green-500 animate-fade-in-left">
          <h2 className="text-3xl font-bold font-serif text-blue-600 mb-6 hover:scale-105 transition-transform duration-300">
            Reach Our Team
          </h2>
          
          <div className="space-y-6">
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="font-semibold text-lg uppercase tracking-wider text-gray-500 mb-1">Email Address</h4>
              <p className="text-xl">
                <a
                  href="mailto:ravindra906080@gmail.com"
                  className="hover:text-green-500 transition-colors duration-300"
                  aria-label="Email Ravindra Kumar"
                >
                  ravindra906080@gmail.com
                </a>
              </p>
            </div>

            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="font-semibold text-lg uppercase tracking-wider text-gray-500 mb-1">Phone Numbers</h4>
              <p className="text-xl space-y-2">
                <a
                  href="tel:+919060804572"
                  className="block hover:text-green-500 transition-colors duration-300"
                  aria-label="Call +91 90608 04572"
                >
                  +91 90608 04572
                </a>
                <a
                  href="tel:+919304912554"
                  className="block hover:text-green-500 transition-colors duration-300"
                  aria-label="Call +91 93049 12554"
                >
                  +91 93049 12554
                </a>
              </p>
            </div>

            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="font-semibold text-lg uppercase tracking-wider text-gray-500 mb-1">Office Address</h4>
              <p className="text-lg leading-relaxed text-gray-700">
                0, Basobar Road, Hanuman Mandir, DARU, Basobar, Hazaribag, Jharkhand-825313
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg uppercase tracking-wider text-gray-500 mb-2">Our Location</h4>
              <div className="relative w-full h-64 md:h-80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14577.420235884436!2d85.53233093955079!3d24.018541400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f481389e0b154f%3A0x9e74e70fb6ab51db!2sBasobar%20Mandir!5e0!3m2!1sen!2sin!4v1760007599609!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Basobar Road, Hazaribag, Jharkhand"
                  aria-label="Map showing our office location in Hazaribag, Jharkhand"
                  className="grayscale-[0.3] hover:grayscale-[0.2] transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-2/3 p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 animate-fade-in-right">
          <h2 className="text-3xl font-bold font-serif text-blue-600 mb-6 hover:scale-105 transition-transform duration-300">
            Send Us an Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject (e.g., Export Inquiry, Supplier Partnership)"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:scale-[1.02]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 hover:scale-105 transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 group"
              aria-label="Submit Contact Form"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;