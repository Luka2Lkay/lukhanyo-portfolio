import workflowGenerator from "@/assets/projects/workflow_generator.png";
import workflowGenerator1 from "@/assets/projects/workflow_generator_1.png";
import workflowGenerator2 from "@/assets/projects/workflow_generator_2.png";
import workflowGenerator3 from "@/assets/projects/workflow_generator_3.png";

import courseManagement from "@/assets/projects/course_management.png";
import courseManagement1 from "@/assets/projects/course_management_1.png";
import courseManagement2 from "@/assets/projects/course_management_2.png";
import courseManagement3 from "@/assets/projects/course_management_3.png";

import homeOfCommerce from "@/assets/projects/hoc.png";
import homeOfCommerce1 from "@/assets/projects/hoc_1.png";
import homeOfCommerce2 from "@/assets/projects/hoc_2.png";
import homeOfCommerce3 from "@/assets/projects/hoc_3.png";

import recipeSearch from "@/assets/projects/recipe_search.png";
import recipeSearch1 from "@/assets/projects/recipe_search_1.png";
import recipeSearch2 from "@/assets/projects/recipe_search_2.png";
import recipeSearch3 from "@/assets/projects/recipe_search_3.png";

import memoryGame from "@/assets/projects/memory_game.png";
import memoryGame1 from "@/assets/projects/memory_game_1.png";
import memoryGame2 from "@/assets/projects/memory_game_2.png";
import memoryGame3 from "@/assets/projects/memory_game_3.png";

export const projects = [
  {
    id: 1,
    title: "Workflow Generator",
    subtitle: "AI-powered Business Process Optimization",
    category: "fullstack",

    image: workflowGenerator,
    images: [
      workflowGenerator,
      workflowGenerator1,
      workflowGenerator2,
      workflowGenerator3,
    ],

    overview:
      "An AI-powered web application that analyzes business workflows and generates optimized process recommendations using Large Language Models.",

    description:
      "AI Workflow Generator helps businesses identify inefficiencies in their operational processes by analyzing workflow descriptions and generating optimized process diagrams and recommendations.",

    problem:
      "Many businesses struggle to identify bottlenecks and inefficiencies in their workflows. Traditional process analysis is often time-consuming and requires consultants.",

    solution:
      "Built an AI-powered platform that accepts workflow descriptions, analyzes them using the DeepSeek model via OpenRouter API, and generates optimized workflows with actionable recommendations.",

    features: [
      "AI workflow analysis",
      "Process optimization suggestions",
      "Workflow visualization",
      "Responsive dashboard",
      "Modern UI with Tailwind CSS",
      "RESTful API integration",
    ],

    challenges: [
      "Designing effective AI prompts",
      "Handling inconsistent AI responses",
      "Optimizing API request performance",
      "Creating a responsive user experience",
    ],

    lessons: [
      "Prompt engineering techniques",
      "Working with LLM APIs",
      "Managing asynchronous API requests",
      "Building scalable React architecture",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "OpenRouter API",
      "DeepSeek",
      "Tailwind CSS",
      "Vite",
    ],

    architecture: ["React", "Express API", "OpenRouter", "DeepSeek AI"],

    github: "https://github.com/Luka2Lkay/workflow-generator",

    live: "https://workflow-generator-iz7g.onrender.com/",

    featured: true,
  },

  {
    id: 2,

    title: "Course Management System",

    subtitle: "Full Stack Learning Platform",

    category: "fullstack",

    image: courseManagement,

    images: [
      courseManagement,
      courseManagement1,
      courseManagement2,
      courseManagement3,
    ],

    overview:
      "A complete course management platform where administrators can create, update, and manage courses with image uploads.",

    description:
      "A full-stack application that allows users to manage course information with secure image uploads, cloud storage, and CRUD functionality.",

    problem:
      "Managing educational content manually becomes inefficient as the number of courses grows.",

    solution:
      "Developed a centralized management system with image uploads, cloud storage, and a responsive administrative interface.",

    features: [
      "Course CRUD",
      "Cloudinary image uploads",
      "REST API",
      "Responsive UI",
      "MongoDB database",
      "Material Design interface",
    ],

    challenges: [
      "Image upload pipeline",
      "Cloudinary integration",
      "MongoDB schema design",
      "Error handling",
    ],

    lessons: [
      "Building scalable REST APIs",
      "Managing file uploads",
      "Working with Angular services",
      "Database modeling",
    ],

    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "Angular Material",
    ],

    architecture: ["Angular", "Express API", "MongoDB", "Cloudinary"],

    github:
      "https://github.com/Luka2Lkay/Course-Management-System-With-Backend",

    live: "https://course-management-system-with-backe-beta.vercel.app/available-courses",

    featured: true,
  },

  {
    id: 3,

    title: "Home of Commerce",

    subtitle: "Educational Tutoring Platform",

    category: "fullstack",

    image: homeOfCommerce,

    images: [homeOfCommerce, homeOfCommerce1, homeOfCommerce2, homeOfCommerce3],

    overview:
      "A modern tutoring platform that enables students to discover tutoring services, submit enquiries, and book lessons online.",

    description:
      "Home of Commerce is a responsive educational platform designed to improve the student booking experience while giving administrators an easy way to manage enquiries.",

    problem:
      "The business had no modern online presence and relied on manual communication for student enquiries and bookings.",

    solution:
      "Designed and developed a modern full-stack website with an online booking system, contact forms, responsive UI, and backend email integration.",

    features: [
      "Online booking",
      "Contact forms",
      "Email notifications",
      "Responsive design",
      "Animated user interface",
      "Educational resources",
      "FAQ section",
    ],

    challenges: [
      "Form validation",
      "Email delivery",
      "Responsive layouts",
      "User experience improvements",
    ],

    lessons: [
      "Improving conversion-focused UI",
      "Using Framer Motion effectively",
      "Building reusable React components",
      "Integrating Brevo email services",
    ],

    technologies: [
      "React",
      "Express",
      "Supabase",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Brevo",
      "Vite",
    ],

    architecture: ["React", "Express API", "Supabase", "Brevo"],

    github: "https://github.com/Luka2Lkay/home-of-commerce",

    live: "https://www.homeofcommerce.co.za/",

    featured: true,
  },
  {
    id: 4,

    title: "Recipe Search App",

    subtitle: "Discover recipes from around the world",

    category: "frontend",

    image: recipeSearch,

    images: [recipeSearch, recipeSearch1, recipeSearch2, recipeSearch3],

    overview:
      "A modern recipe discovery application that lets users search for meals, explore ingredients, and find cooking inspiration through an intuitive interface.",

    description:
      "A responsive React application that integrates with a recipe API, allowing users to search for meals, browse recipes, and view detailed cooking instructions.",

    problem:
      "Finding recipes online often means navigating cluttered websites and endless ads. I wanted a clean, fast, and enjoyable browsing experience.",

    solution:
      "Built a lightweight recipe search application with a responsive interface, fast search functionality, and detailed recipe pages powered by a public recipe API.",

    features: [
      "Recipe search",
      "Detailed recipe pages",
      "Ingredient lists",
      "Cooking instructions",
      "Responsive design",
      "Fast API integration",
    ],

    challenges: [
      "Handling API responses",
      "Managing loading and error states",
      "Designing a responsive UI",
    ],

    lessons: [
      "Working with external APIs",
      "Improving state management",
      "Building reusable React components",
    ],

    technologies: ["React", "JavaScript", "CSS", "REST API", "Vite"],

    architecture: ["React", "Recipe API"],

    github: "https://github.com/Luka2Lkay/recipe-search-app",

    live: "http://localhost:5174/dashboard",

    featured: false,

    funFact:
      "I may have accidentally left one tiny bug hiding somewhere in this project. Think you've found it? Let me know—I promise I won't pretend it was a feature.",
  },
  {
    id: 5,
    title: "Memory Game",
    subtitle: "Interactive Card Matching Game",
    category: "frontend",

    image: memoryGame,
    images: [memoryGame, memoryGame1, memoryGame2, memoryGame3],

    overview:
      "A responsive memory matching game built with React and Tailwind CSS that challenges players to find matching card pairs while tracking their performance.",

    description:
      "Memory Game is an interactive web application that tests players' memory through randomized card matching. The game supports multiple grid sizes, tracks elapsed time and flips, and provides a smooth, responsive experience across devices.",

    problem:
      "Create an engaging browser-based game that delivers an enjoyable user experience while demonstrating React state management, game logic, and responsive UI design.",

    solution:
      "Developed a dynamic memory matching game with randomized card shuffling, configurable board sizes, real-time timer and move tracking, and a victory modal to celebrate successful completion.",

    features: [
      "Multiple grid sizes (2×2, 3×2, 4×3, 5×2)",
      "Randomized card shuffle",
      "Real-time timer",
      "Flip counter",
      "Win modal",
      "Responsive design",
    ],

    challenges: [
      "Managing complex game state",
      "Implementing reliable card matching logic",
      "Preventing multiple rapid card selections",
      "Creating a responsive grid for different board sizes",
    ],

    lessons: [
      "Advanced React state management",
      "Building interactive game logic",
      "Working with timers and side effects",
      "Creating reusable React components",
    ],

    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "CSS"],

    architecture: [
      "React",
      "Component-Based Architecture",
      "Game State Management",
    ],

    github: "https://github.com/Luka2Lkay/memory-game",

    live: "https://memory-game-smoky-iota.vercel.app/",

    featured: false,
  },
];
