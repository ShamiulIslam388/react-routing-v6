import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "home page";
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My World</h1>
        <p className="text-lg mb-8">Exploring Creativity Through Code</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 hover:text-blue-800">
          Learn More
        </button>
      </header>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/about" className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            A passionate React developer with a love for creating intuitive and
            captivating user interfaces. Explore my journey, skills, and
            projects that showcase my dedication to the craft.
          </p>
        </Link>

        <Link to="/portfolio" className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
          <p className="text-gray-700">
            Delve into a selection of my latest projects. From dynamic websites
            to interactive web apps, each project demonstrates my ability to
            turn ideas into compelling digital experiences.
          </p>
        </Link>
      </section>

      <footer className="mt-12 text-center">
        <p>&copy; 2023 Shamiul Islam. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-xl text-white hover:text-blue-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl text-white hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl text-white hover:text-blue-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
