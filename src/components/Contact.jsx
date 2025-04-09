import React from "react";

const Contact = () => (
  <section className="py-8">
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-2">Email: hello@consultingco.com</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;