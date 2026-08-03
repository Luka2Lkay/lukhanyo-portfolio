import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-Icons/fa";

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Luka2Lkay",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR-LINKEDIN",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:your@email.com",
    label: "Email",
  },
];