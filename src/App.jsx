import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Experience } from "@/sections/experience";
import { Contact } from "@/sections/contact";
import Footer from "@/components/footer/Footer";
import Certification from "@/sections/certifications/section/Certification";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
