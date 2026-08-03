import { motion } from "framer-motion";
import ContactForm from "@/sections/contact/components/ContactForm";
import ContactInfoLink from "../components/ContactInfoLink";
import SocialLink from "@/sections/contact/components/SocialLink";
import { contactInfo } from "@/sections/contact/data/contact_info";
import { socialLinks } from "@/sections/contact/data/social_links";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Awesome
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you have a project, an opportunity, or simply want to chat
            about software development, React, Express, C#, or AI, I'd love to
            hear from you.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {contactInfo.map((contact) => (
            <ContactInfoLink key={contact.title} contact={contact} />
          ))}

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-lg font-semibold text-white">
                Available for Opportunities
              </h3>
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              I'm currently open to junior software developer roles, freelance
              projects, and collaborations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Find me online</h3>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.title} social={social} />
              ))}
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 p-10 text-center backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-white">
          &#128587; Before You Go...
        </h3>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          If you've made it this far, thanks for checking out my portfolio!
          Whether you're looking for a developer, a collaborator, or just
          someone to chat with about React, AI, or why CSS sometimes behaves
          like it has its own personality, my inbox is always open.
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;
