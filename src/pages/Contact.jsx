import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for contacting us! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "support@checkshelf.com",
      link: "mailto:support@checkshelf.com",
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "123 Chess Avenue, Strategic City, SC 12345",
      link: "#",
    },
    {
      id: 4,
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-accent font-semibold tracking-widest mb-4 uppercase">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-black font-semibold py-3 px-6 rounded-lg hover:bg-black hover:text-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to
                help!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.id}
                    href={info.link}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="shrink-0 w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p className="font-semibold">Map Location</p>
                    <p className="text-sm">Interactive map goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Callout (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Check out our FAQ section for quick answers to common questions
            about our courses, books, and platform.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-black hover:text-accent transition-all duration-300"
          >
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
