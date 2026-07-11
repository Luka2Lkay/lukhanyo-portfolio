import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started Learning Web Development at Umuzi",
    description: "Began learning Git, JavaScript, and Express.js.",
  },
  {
    year: "2023",
    title: "Built Course Management System",
    description:
      "Developed a full-stack course management system using Angular, Node.js, and MongoDB.",
  },
  {
    year: "2024",
    title: "Built Shop Management System",
    description:
      "Built a shop management system using Angular, C#, and Microsoft SQL Server.",
  },
  {
    year: "2025",
    title: "Built Recipe Search App",
    description:
      "Developed a recipe search application using React, Node.js, and Spoonacular API.",
  },
  {
    year: "2026",
    title: "Building UbuntuBlog",
    description:
      "Developing a blog platform that serves multiple niche websites from a single API.",
  },
];

function JourneyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className="
                absolute left-5 z-20
                h-5 w-5 rounded-full
                bg-cyan-400
                shadow-[0_0_20px_#22d3ee]
                md:left-1/2
                md:-translate-x-1/2
              "
              />

              <div
                className="ml-16 w-full
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                md:ml-0
                md:w-[45%]
              "
              >
                <span className="text-cyan-400 font-semibold">{item.year}</span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
}

export default JourneyTimeline;
