// Mock data for portfolio

export const personalInfo = {
  name: "Saurabh Singh Baghel",
  role: "Computer Science Student",
  university: "University of Alberta",
  tagline:
    "Building reliable software systems with a focus on UI architecture, testing, and systems-level thinking.",

  email: "ssb.sr.2864@gmail.com",
  github: "https://github.com/saurabh-s-baghel",
  linkedin: "https://www.linkedin.com/in/saurabh-ssb",
  resume: "/resume.pdf" // we’ll wire this later
};

export const aboutMe = {
  description:
    "Computer Science student at the University of Alberta with hands-on experience in UI engineering, systems programming, and software testing. Interested in building reliable, well-architected software across web, mobile, and low-level systems. Outside of tech, I enjoy climbing, running, traveling, breakdancing, and strength training.",
    interests: [
    "Software Development",
    "Android Development",
    "Cybersecurity",
    "Reinforcement Learning",
    "UI/UX Design"
  ],
  skills: [
    { name: "Java", category: "language" },
    { name: "Python", category: "language" },
    { name: "C", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "HTML/CSS", category: "language" },
    { name: "RISC-V", category: "language" },
    { name: "React", category: "framework" },
    { name: "Android SDK", category: "framework" },
    { name: "LINUX", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "Docker", category: "tool" },
    { name: "Linux", category: "tool" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio & UI Framework",
    description:
      "Engineered a modular React-based portfolio by reverse-engineering a component architecture and rebuilding it using Shadcn UI and Tailwind CSS. Focused on responsive layout, clean separation of data and presentation, and production deployment via GitHub Pages.",
    technologies: ["React", "Shadcn UI", "Tailwind CSS", "GitHub Pages"],
    category: "web",
    image: "/projects/portfolio.png",
    githubUrl: "https://github.com/saurabh-s-baghel/saurabh-s-baghel.github.io",
    liveUrl: "https://saurabh-s-baghel.github.io"
  },

  {
    id: 2,
    title: "SeekDeep (Mobile UI & OOD)",
    description:
      "Developed an Android application using strict object-oriented design principles. Built modular UI components in Java/XML, collaborated in a Scrum team, and integrated Firebase-backed authentication and data flows with unit testing.",
    technologies: ["Java", "Android", "XML", "Firebase", "Agile"],
    category: "android",
    image: "/projects/seekdeep.png",
    githubUrl: "https://github.com/cmput301-w25/project-seekdeep",
    liveUrl: null
  },

  {
    id: 3,
    title: "DragonShell & File System Simulator",
    description:
      "Built a custom Unix shell and virtual file system in C, implementing process management, memory handling, and file consistency logic using POSIX APIs. Focused on correctness, efficiency, and low-level debugging.",
    technologies: ["C", "POSIX", "Linux", "Valgrind"],
    category: "systems",
    image: "/projects/dragonshell.png",
    githubUrl: null,
    liveUrl: null,
    restricted: true
  },

  {
    id: 4,
    title: "Tartan (QA & Testing)",
    description:
      "Applied Test-Driven Development practices by designing comprehensive JUnit test suites. Integrated automated testing workflows using GitHub Actions to improve reliability and catch regressions early.",
    technologies: ["Java", "JUnit", "GitHub Actions", "TDD"],
    category: "testing",
    image: "/projects/tartan.png",
    githubUrl: null,
    liveUrl: null,
    restricted: true
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/saurabh-s-baghel",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saurabh-ssb",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:ssb.sr.2864@gmail.com",
    icon: "mail"
  }
];
