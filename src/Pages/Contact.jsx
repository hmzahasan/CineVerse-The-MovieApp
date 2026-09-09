import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    console.log(formData);

    alert("Thank you for contacting CineVerse!");
  };

  return (
    <div className="min-h-screen bg-[#020b12] text-gray-300 px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-6">
          Contact <span className="text-blue-500">Us</span>
        </h1>

        <p className="text-lg leading-8 mb-10">
          Have a question, suggestion, or found something that isn't working
          correctly? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>

            <h2 className="text-2xl font-semibold text-white mb-5">
              Get in Touch
            </h2>

            <p className="leading-7 mb-6">
              You can contact us regarding website problems, feature
              suggestions, technical issues, or general questions.
            </p>

            <div className="space-y-4">

              <div>
                <h3 className="text-white font-medium">
                  Email
                </h3>

                <p className="text-blue-400">
                  support@cineverse.com
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium">
                  Response Time
                </h3>

                <p>
                  We usually try to respond within 2–3 business days.
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#07141e] p-6 rounded-2xl border border-gray-800"
          >

            <div className="mb-5">
              <label className="block text-white mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#020b12] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#020b12] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#020b12] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;