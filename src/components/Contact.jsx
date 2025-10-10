import React, { useState } from 'react';
import contactImage from '../assets/hero.jpg'; // Ensure path is correct

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

    const template = `*New Website Inquiry*%0A` +
      `Dear Ravindra Kumar Team,%0A` +
      `A new contact form submission has been received. Please review the details below:%0A` +
      `----------------------------------------%0A`;

    const userData = `*Name*: ${formData.name}%0A` +
      `*Email*: ${formData.email}%0A` +
      `*Subject*: ${formData.subject}%0A` +
      `*Message*: ${formData.message}%0A` +
      `----------------------------------------%0A` +
      `Thank you for your attention!`;

    const whatsappNumber = '+919060804572';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(template + userData)}`;

    window.open(whatsappUrl, '_blank');
    alert('Your inquiry has been opened in WhatsApp. Please click "Send" to complete submission.');

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-teal-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-80 md:h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700/80 to-blue-600/80 hover:from-teal-700/70 hover:to-blue-600/70 transition-all duration-700 ease-in-out"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-serif font-extrabold text-white tracking-tight animate-pulse-slow">
          Connect With Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Left: Contact Info */}
        <div className="lg:w-2/3 space-y-10 animate-slide-in-left">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-teal-600 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-20 after:h-1.5 after:bg-teal-500 after:transition-all after:duration-500 hover:after:w-32">
            Reach Our Team
          </h2>

          <div className="border-l-4 border-teal-500 pl-6 bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <p className="text-lg leading-relaxed text-gray-600">
              We're here to assist you with your inquiries about our premium <strong>Indian agricultural products</strong>. Whether it's about exports, partnerships, or product details, our team is ready to help.
            </p>
          </div>

          <div className="space-y-8">
            {/* Email */}
            <div className="transition-transform duration-300 hover:translate-x-3">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">Email Address</h4>
              <p className="text-lg font-medium">
                <a href="mailto:ravindra906080@gmail.com" className="text-teal-500 hover:text-teal-600 transition-colors duration-300">
                  ravindra906080@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="transition-transform duration-300 hover:translate-x-3">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">Phone Numbers</h4>
              <p className="text-lg font-medium space-y-2">
                <a href="tel:+919060804572" className="block text-teal-500 hover:text-teal-600 transition-colors duration-300">
                  +91 90608 04572
                </a>
                <a href="tel:+919304912554" className="block text-teal-500 hover:text-teal-600 transition-colors duration-300">
                  +91 93049 12554
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="transition-transform duration-300 hover:translate-x-3">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">Office Address</h4>
              <p className="text-lg leading-relaxed text-gray-700">
                0, Basobar Road, Hanuman Mandir, DARU, Basobar, Hazaribag, Jharkhand-825313
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-1/3 w-full space-y-10 animate-slide-in-right">
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 text-white p-8 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-400 mb-6 tracking-tight">
              Send Your Inquiry
            </h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-4 text-base text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-4 text-base text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (e.g., Export Inquiry, Partnership)"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-4 text-base text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl p-4 text-base text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:shadow-md resize-y"
              ></textarea>

              <button
                type="button"
                onClick={handleSubmit}
                className="relative bg-teal-500 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider shadow-lg hover:bg-teal-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                Send Message
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gradient-to-br from-white to-teal-50 p-5 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-500 mb-3">Our Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14577.420235884436!2d85.53233093955079!3d24.018541400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f481389e0b154f%3A0x9e74e70fb6ab51db!2sBasobar%20Mandir!5e0!3m2!1sen!2sin!4v1760007599609!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Office Location Map"
              className="rounded-xl shadow-md transition-transform duration-700 hover:scale-110"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;