export const portfolio = {
  name: "Rohit Kumar",
  title: "CSE (AI & ML) Student | Aspiring Data & AI Engineer",
  tagline: "Exploring Data, AI and modern technologies to build meaningful solutions.",
  location: "Lucknow, India",
  email: "rohitkumar9427946852@gmail.com",
  phone: "+91 9336087767",
  resumePath: "/resume/Rohit-Kumar-Resume.pdf",
  about:
    "I am a third-year B.Tech student specializing in Computer Science and Engineering with Artificial Intelligence and Machine Learning. I am passionate about learning data, artificial intelligence, and modern software technologies. I enjoy solving problems, exploring new technologies, and building practical projects. Currently, I am strengthening my programming, data structures, web development, and data-related skills. My goal is to build a career in the field of Data and AI while continuously improving my technical expertise.",
  social: {
    github: { label: "GitHub", url: "PLACEHOLDER", note: "Replace with real GitHub URL" },
    linkedin: { label: "LinkedIn", url: "PLACEHOLDER", note: "Replace with real LinkedIn URL" },
    leetcode: { label: "LeetCode", url: "PLACEHOLDER", note: "Replace with real LeetCode URL" },
  },
} as const;

export const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
] as const;

export const education = [
  {
    qualification: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    detail: "3rd Year · CGPA 8.9",
    year: "Expected 2027",
  },
  { qualification: "Class 12th", institution: "Allahabad", detail: "84%", year: "2024" },
  { qualification: "Class 10th", institution: "Chitrakoot", detail: "80%", year: "2022" },
] as const;

export const skillGroups = [
  { title: "Programming", skills: ["Java", "Python", "C", "JavaScript"] },
  { title: "Data & AI", skills: ["Python for Data Analysis", "NumPy", "Pandas", "Matplotlib", "Basic Machine Learning", "Data Visualization", "SQL"] },
  { title: "Web Development", skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "Node.js", "Express.js", "REST APIs"] },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook"] },
  { title: "Core Concepts", skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks", "Machine Learning Fundamentals"] },
] as const;

export const projects = [
  {
    title: "Developer Portfolio",
    description: "A responsive personal developer portfolio showcasing education, technical skills, projects, achievements, and contact information with a modern interactive interface.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    features: ["Responsive design", "Modern UI", "Smooth animations", "Projects showcase", "Skills section", "Contact form", "Resume download"],
    github: "PLACEHOLDER",
    live: "PLACEHOLDER",
  },
  {
    title: "Smart Data Analytics Dashboard",
    description: "A web-based dashboard that displays and analyzes datasets through interactive charts and visualizations, helping users understand trends and patterns in data.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "React.js"],
    features: ["Data visualization", "Interactive charts", "Dataset analysis", "Statistical summaries", "Responsive dashboard"],
    github: "PLACEHOLDER",
  },
  {
    title: "AI-Based Student Performance Predictor",
    description: "A machine-learning based application that analyzes student-related data and predicts academic performance using selected input parameters.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "HTML", "CSS"],
    features: ["Data preprocessing", "Machine learning model", "Prediction system", "Simple web interface", "Result visualization"],
    github: "PLACEHOLDER",
  },
  {
    title: "Netflix Clone",
    description: "A responsive movie-streaming interface inspired by modern OTT platforms, created to practice frontend development and responsive UI design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [],
    github: "PLACEHOLDER",
    live: "PLACEHOLDER",
  },
] as const;

export const achievements = [
  "Participated in technical hackathons and project-based development.",
  "Developed multiple web development projects.",
  "Continuously practicing Data Structures and Algorithms.",
  "Participated in technical workshops and coding activities.",
] as const;