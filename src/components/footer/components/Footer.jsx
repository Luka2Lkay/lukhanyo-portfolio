import { motion } from "framer-motion";
import { socials, links } from "@/components/footer/data/footer_data";
import SocialsLink from "@/components/footer/components/SocialsLink";
import { ArrowUp } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Lukhanyo<span className="text-cyan-400">.</span>
            </h3>
            <p className="mt-5 max-w-sm leading-8 text-slate-400">
              Full Stack Developer passionate about building useful software,
              solving real-world problems, and continuously learning new
              technologies.{" "}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            {socials.map((social) => (
              <SocialsLink social={social} key={social.label} />
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mt-4">Explore</h4>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">
              Before You Leave...
            </h4>
            <p className="mt-6 leading-8 text-slate-400">
              Thank you for taking the time to explore my portfolio. I hope you
              enjoyed looking through my projects as much as I enjoyed building
              them. If something caught your eye, let's connect!
            </p>
            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              <ArrowUp size={20} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
