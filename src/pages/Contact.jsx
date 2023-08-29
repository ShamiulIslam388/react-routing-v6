import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact page";
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 rounded shadow-lg min-w-[350px]">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded placeholder-gray-400"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded placeholder-gray-400"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded placeholder-gray-400"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
