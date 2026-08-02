import { Award, GraduationCap, Cloud, Code2 } from "lucide-react";

export const certifications = [
  {
    id: 1,
    title: "Information Technology (NQF Level 5)",
    provider: "Umuzi",
    year: "2024",
    status: "Completed",
    icon: GraduationCap,
    color: "cyan",

    description:
      "Completed the NQF Level 5 Information Technology programme, gaining practical software development experience, teamwork skills, and industry-focused training.",

    skills: [
      "Software Development",
      "Programming",
      "Databases",
      "Problem Solving",
      "Agile",
      "Team Collaboration",
    ],

    credential: "",
  },

  {
    id: 2,
    title: "Foundational C# with Microsoft",
    provider: "freeCodeCamp",
    year: "2024",
    status: "Completed",
    icon: Code2,
    color: "emerald",

    description:
      "Learned the fundamentals of C#, including object-oriented programming, variables, methods, collections, and application development using Microsoft's curriculum.",

    skills: [
      "C#",
      ".NET Fundamentals",
      "Object-Oriented Programming",
      "Problem Solving",
    ],

    credential: "",
  },

  {
    id: 3,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    year: "2026",
    status: "Completed",
    icon: Cloud,
    color: "blue",

    description:
      "Developed foundational knowledge of Microsoft Azure cloud services, cloud concepts, security, pricing, governance, and Azure solutions.",

    skills: [
      "Microsoft Azure",
      "Cloud Computing",
      "Azure Services",
      "Security",
      "Governance",
    ],

    credential: "",
  },

  {
    id: 4,
    title: "Bachelor of Science in Software Development",
    provider: "IU International University of Applied Sciences",
    year: "2025 – 2028",
    status: "In Progress",
    icon: Award,
    color: "purple",

    description:
      "Currently studying Software Development with a focus on software engineering, algorithms, databases, distributed systems, and modern application development.",

    skills: [
      "Software Engineering",
      "Algorithms",
      "Data Structures",
      "Databases",
      "System Design",
    ],

    expectedGraduation: "2028",

    credential: "",
  },
];
