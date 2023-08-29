import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Portfolio from "./pages/Portfolio";
import PostLayout from "./components/PostLayout";

export default function App() {
  return (
    <div className="max-w-[780px] mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<PostLayout />}>
          <Route index element={<Posts />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
