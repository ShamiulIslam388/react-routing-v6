import { useEffect } from "react";
import DocumentTitle from "../components/DocumentTitle";

export default function About() {
  useEffect(() => {
    document.title = "about page";
  }, []);
  return (
    <div>
      <DocumentTitle title="about page" description={"this is my about page"} />
      <div className="flex items-center justify-center">
        <div className="p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi there! I'm Shamiul Islam, a passionate React developer based in
            Dhaka,Bangladesh. With a keen interest in building beautiful and
            functional user interfaces, I strive to create web applications that
            deliver an exceptional user experience.
          </p>
          <p className="text-gray-700 mt-4">
            I have a strong foundation in web development, and my expertise lies
            in front-end technologies such as React, HTML, CSS, and JavaScript.
            I enjoy working collaboratively to bring ideas to life and solve
            complex problems through code.
          </p>
          <p className="text-gray-700 mt-4">
            When I'm not coding, you can find me exploring the latest
            advancements in web development, experimenting with new frameworks
            and libraries, or enjoying outdoor activities. I'm also passionate
            about continuous learning and staying up-to-date with the
            ever-evolving tech landscape.
          </p>
          <p className="text-gray-700 mt-4">
            If you're looking for a dedicated and creative React developer to
            join your team, feel free to reach out! I'm excited to contribute my
            skills and collaborate on exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
}
