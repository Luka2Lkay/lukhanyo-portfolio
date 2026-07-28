import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "./sections/projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
