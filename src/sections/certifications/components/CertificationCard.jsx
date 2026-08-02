import { motion } from "framer-motion";
import { Calendar, ExternalLink, CheckCircle, Clock3 } from "lucide-react";

const statusStyles = {
  completed: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    icon: <CheckCircle size={16} />,
  },
  "In Progress": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    icon: <Clock3 size={16} />,
  },
};

function CertificationCard({ certification, index }) {
  const Icon = certification.icon;

  const status =
    statusStyles[certification.status] || statusStyles["completed"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-500/30"
    >
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
              <Icon size={28} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {certification.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {certification.provider}
              </p>
            </div>
          </div>

          <span
            className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${status.bg} ${status.text} ${status.border}`}
          >
            {status.icon}
            {certification.status}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <Calendar size={16} />
          {certification.year}
        </div>

        <p className="mt-6 leading-7 text-slate-400">
          {certification.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          {certification.credential ? (
            <a
              href={certification.credential}
              target="_blank"
              ref="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              View Credential <ExternalLink size={16} />
            </a>
          ) : (
            <span className="text-sm text-slate-500">
              Credential Available on Request
            </span>
          )}

          <span className="text-xs uppercase tracking-wider text-slate-500">
            {certification.provider}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default CertificationCard;
