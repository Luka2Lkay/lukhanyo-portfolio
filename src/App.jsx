import "./App.css";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Experience } from "@/sections/experience";
import { Contact } from "@/sections/contact";
import { Footer } from "@/components/footer";
import { Certifications } from "@/sections/certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
