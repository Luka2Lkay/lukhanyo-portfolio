import { motion } from "framer-motion";

function ContactInfoLink({ contact }) {
  const Icon = contact.icon;
  return (
    <motion.a
      whileHover={{ x: 8 }}
      href={contact.href}
      className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-500/30"
    >
      <div className="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
        <Icon size={28} />
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-slate-500">
          {contact.title}
        </p>
        <p className="mt-1 font-medium text-white">{contact.value}</p>
      </div>
    </motion.a>
  );
}

export default ContactInfoLink;
