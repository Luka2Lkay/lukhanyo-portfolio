import workflowGenerator from "@/assets/projects/workflow_generator.png";
import courseManagement from "@/assets/projects/course_management.png";

export const projects = [
  {
    id: 1,
    title: "Workflow Generator",
    category: "fullstack",
    description: "An online system that analyzes work processes.",
    image: workflowGenerator,
    technologies: [
      "React",
      "Node",
      "Express",
      "OpenRouter API",
      "DeepSeek Model",
      "Tailwind CSS",
    ],
    github: "https://github.com/Luka2Lkay/Workflow",
    live: "https://ubuntublog.com",
  },
  {
    id: 2,
    title: "Course Management System",
    category: "Fullstack",
    description:
      "A platform for learners to discover and book driving schools.",
    image: courseManagement,
    technologies: ["Angular", "MongoDB", "Node", "Express", "Material UI"],
    github: "",
    live: "",
  },
];
