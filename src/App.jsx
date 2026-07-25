import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import Projects from "./components/projects_section/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
