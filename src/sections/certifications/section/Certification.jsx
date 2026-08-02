import { motion } from "framer-motion";
import CertificationCard from "@/sections/certifications/components/CertificationCard";
import { certifications } from "@/sections/certifications/data/certifications_data";

const stats = [
  {
    label: "Certifications",
    value: "3+",
  },
  {
    label: "Degree",
    value: "1",
  },
  {
    label: "Expected Graduation",
    value: "2028",
  },
  {
    label: "Always",
    value: "Learning",
  },
];

function Certification() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Eductaion & Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Investing in Continuous Learning
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every course, certification, and project has helped shape my journey
            as a developer. I'm always learning something new and applying it to
            real-world software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-cyan-400">{stat.value}</h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
