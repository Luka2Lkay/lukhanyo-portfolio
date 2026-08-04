import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";

export const skillCategories = {
  frontend: {
    label: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
        level: 90,
        description: "Building interactive and scalable user interfaces.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 90,
        description: "Creating dynamic and modern web applications.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: 75,
        description: "Writing safer and more maintainable applications.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 85,
        description: "Building responsive and modern interfaces.",
      },
    ],
  },

  backend: {
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        level: 85,
        description: "Building server-side applications and APIs.",
      },
      {
        name: "Express",
        icon: SiExpress,
        level: 85,
        description: "Creating REST APIs and backend services.",
      },
    ],
  },

  database: {
    label: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: 80,
        description: "Designing relational databases and data models.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 75,
        description: "Working with flexible NoSQL data structures.",
      },
    ],
  },

  tools: {
    label: "Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        level: 90,
        description: "Version control and collaborative development.",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        level: 90,
        description: "Source control, collaboration and CI/CD workflows.",
      },
      {
        name: "Docker",
        icon: SiDocker,
        level: 65,
        description:
          "Containerizing applications and development environments.",
      },
      {
        name: "Figma",
        icon: SiFigma,
        level: 70,
        description: "Designing and translating interfaces into code.",
      },
    ],
  },
};
