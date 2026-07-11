import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero_section/hero/Hero";
import About from "@/components/about_section/about/About";
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
