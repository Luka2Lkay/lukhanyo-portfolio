import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Projects } from "./sections/projects";

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
