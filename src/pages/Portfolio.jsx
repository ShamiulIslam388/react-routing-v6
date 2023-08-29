import React, { useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 2",
    description: "Consectetur adipiscing elit...",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 4",
    description: "Consectetur adipiscing elit...",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 6",
    description: "Consectetur adipiscing elit...",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "portfolio page | Shamiul Islam";
  }, []);
  return (
    <div className="pb-8">
      <h1 className="text-4xl text-center font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-4 rounded shadow-md transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
