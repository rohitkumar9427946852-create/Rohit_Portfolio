import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  Sparkles,
  Sun,
  Terminal,
  UserRound,
  X,
} from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { achievements, education, navigation, portfolio, projects, skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

const sectionIcons = {
  about: UserRound,
  education: GraduationCap,
  skills: Code2,
  projects: Terminal,
  experience: BriefcaseBusiness,
  achievements: Award,
  contact: Send,
} as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ id, eyebrow, title, description }: { id: keyof typeof sectionIcons; eyebrow: string; title: string; description?: string }) {
  const Icon = sectionIcons[id];
  return (
    <div className="section-heading reveal">
      <div className="section-kicker"><Icon aria-hidden="true" />{eyebrow}</div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function NetworkVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("network-visual", compact && "network-visual-compact")} role="img" aria-label="Abstract data network connecting code, analytics, and artificial intelligence">
      <div className="network-grid" />
      <svg viewBox="0 0 600 600" aria-hidden="true">
        <g className="network-lines">
          <path d="M105 160 235 94l118 74 142-18M105 160l41 167 142 88 168-76M235 94l53 321M353 168l-65 247M495 150l-39 189M146 327l207-159 103 171" />
        </g>
        <g className="network-nodes">
          <circle cx="105" cy="160" r="12" /><circle cx="235" cy="94" r="8" />
          <circle cx="353" cy="168" r="13" /><circle cx="495" cy="150" r="8" />
          <circle cx="146" cy="327" r="10" /><circle cx="288" cy="415" r="14" />
          <circle cx="456" cy="339" r="11" />
        </g>
      </svg>
      <div className="visual-code visual-code-one"><Code2 /> <span>build()</span></div>
      <div className="visual-code visual-code-two"><Database /> <span>data</span></div>
      <div className="visual-core"><Network /><span>AI / ML</span></div>
      <div className="visual-status"><span /> learning in progress</div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const nextTheme: Theme = saved === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#home" aria-label="Rohit Kumar, back to top">
          <span>RK</span><strong>Rohit Kumar</strong>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <PlaceholderIcon icon={<Github />} label="GitHub link pending" />
          <PlaceholderIcon icon={<Linkedin />} label="LinkedIn link pending" />
          <Button variant="ghost" size="icon" className="nav-icon" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button variant="ghost" size="icon" className="nav-icon mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav id="mobile-navigation" className={cn("mobile-nav", open && "mobile-nav-open")} aria-label="Mobile navigation">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ChevronRight /></a>)}
      </nav>
    </header>
  );
}

function PlaceholderIcon({ icon, label }: { icon: ReactNode; label: string }) {
  return <span className="placeholder-icon" aria-label={label} title={label}>{icon}</span>;
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy reveal visible">
        <div className="availability"><span /> Open to learning opportunities</div>
        <p className="hero-greeting">Hi, I&apos;m Rohit Kumar</p>
        <h1>CSE (AI &amp; ML) Student <span>| Aspiring Data &amp; AI Engineer</span></h1>
        <p className="hero-tagline">{portfolio.tagline}</p>
        <div className="hero-actions">
          <Button size="lg" onClick={() => scrollToSection("projects")}>View Projects <ArrowRight /></Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>Contact Me</Button>
          <Button size="lg" variant="ghost" asChild><a href={portfolio.resumePath} download><Download /> Download Resume</a></Button>
        </div>
        <div className="hero-meta"><span><MapPin /> {portfolio.location}</span><span><GraduationCap /> 3rd Year · AKTU</span></div>
      </div>
      <div className="hero-art reveal visible"><NetworkVisual /></div>
      <div className="scroll-cue" aria-hidden="true"><span>Explore</span><i /></div>
    </section>
  );
}

function About() {
  const highlights = ["3rd Year Student", "CSE (AI & ML)", "CGPA 8.9", "Data & AI Enthusiast"];
  return (
    <section id="about" className="section-shell">
      <div className="section-inner about-layout">
        <div>
          <SectionHeading id="about" eyebrow="About me" title="Curious by nature. Focused on building." />
          <div className="about-copy reveal"><p>{portfolio.about}</p></div>
          <div className="highlight-grid reveal">
            {highlights.map((item) => <div className="highlight-item" key={item}><Check />{item}</div>)}
          </div>
        </div>
        <div className="about-visual reveal"><NetworkVisual compact /></div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-shell section-muted">
      <div className="section-inner">
        <SectionHeading id="education" eyebrow="Education" title="Academic journey" description="A foundation in computing, strengthened through focused study in artificial intelligence and machine learning." />
        <div className="timeline">
          {education.map((item, index) => (
            <article className="timeline-item reveal" key={item.qualification}>
              <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-card">
                <div><p>{item.year}</p><h3>{item.qualification}</h3><span>{item.institution}</span></div>
                <strong>{item.detail}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Code2, Sparkles, Terminal, Database, BriefcaseBusiness, BookOpen];
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <SectionHeading id="skills" eyebrow="Technical toolkit" title="Skills I’m developing" description="A practical toolkit spanning programming, data analysis, web development, and computer science fundamentals." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return <article className="skill-card reveal" key={group.title}><div className="skill-card-title"><Icon /><h3>{group.title}</h3></div><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectLink({ kind, placeholder }: { kind: "GitHub" | "Live Demo"; placeholder: string }) {
  const Icon = kind === "GitHub" ? Github : ExternalLink;
  return <span className="project-link-placeholder" title="Replace this placeholder in portfolio data"><Icon />{kind}<small>{placeholder}</small></span>;
}

function Projects() {
  return (
    <section id="projects" className="section-shell section-muted">
      <div className="section-inner">
        <SectionHeading id="projects" eyebrow="Selected work" title="Projects built to learn by doing" description="Coursework and self-directed projects across frontend development, analytics, and machine learning." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-topline"><span>0{index + 1}</span><Code2 /></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {project.features.length ? <ul>{project.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul> : null}
              <div className="project-links">
                <ProjectLink kind="GitHub" placeholder={project.github} />
                {"live" in project ? <ProjectLink kind="Live Demo" placeholder={project.live} /> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <SectionHeading id="experience" eyebrow="Experience" title="Training & Workshop" />
        <article className="feature-panel reveal">
          <div className="feature-panel-main"><span className="feature-label">Workshop</span><h3>Web Development Workshop</h3><p className="feature-org">SoftPro · Trainee / Workshop Participant</p><p>Focused on building a practical foundation in web development and responsive interfaces.</p></div>
          <div className="feature-details"><strong>Focus</strong><span>Web Development</span><div className="tech-list">{["HTML", "CSS", "JavaScript", "Responsive Web Design", "Basic Web Development"].map((item) => <span key={item}>{item}</span>)}</div></div>
        </article>
      </div>
    </section>
  );
}

function Hackathon() {
  const features = ["Citizen issue reporting", "Category-based complaints", "Location-based reporting", "Map visualization", "Admin filtering", "Complaint status tracking"];
  return (
    <section className="section-shell section-muted">
      <div className="section-inner">
        <div className="section-heading reveal"><div className="section-kicker"><Network />Hackathon &amp; Technical Work</div><h2>Civic technology with a practical purpose</h2></div>
        <article className="hackathon-layout reveal">
          <div><span className="feature-label">Technical project</span><h3>Civic Issue Heatmap</h3><p className="feature-org">Full Stack Development Team Member</p><p>A civic-tech application designed to help citizens report issues such as potholes, garbage dumps, broken streetlights, and water leakage using location-based reporting and visualization.</p><div className="tech-list">{["React", "JavaScript", "Leaflet", "Node.js", "REST APIs", "Database"].map((item) => <span key={item}>{item}</span>)}</div></div>
          <div className="feature-checklist"><p>Key features</p>{features.map((feature) => <span key={feature}><Check />{feature}</span>)}</div>
        </article>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-inner">
        <SectionHeading id="achievements" eyebrow="Progress" title="Learning milestones" description="A factual snapshot of ongoing participation, practice, and project-based learning." />
        <div className="achievement-grid">{achievements.map((item, index) => <article className="achievement-item reveal" key={item}><span>0{index + 1}</span><Award /><p>{item}</p></article>)}</div>
      </div>
    </section>
  );
}

function Profiles() {
  const icons = { github: Github, linkedin: Linkedin, leetcode: Code2 };
  return (
    <section className="profiles-band">
      <div className="section-inner profiles-layout reveal">
        <div><p className="section-kicker">Coding &amp; social profiles</p><h2>Find my work online</h2><p>Profile URLs have not been provided yet. Each card is clearly marked for replacement.</p></div>
        <div className="profile-links">{Object.entries(portfolio.social).map(([key, profile]) => { const Icon = icons[key as keyof typeof icons]; return <div className="profile-card" key={profile.label}><Icon /><div><strong>{profile.label}</strong><span>{profile.note}</span></div><small>PLACEHOLDER</small></div>; })}</div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  subject: z.string().trim().min(3, "Please add a subject.").max(150),
  message: z.string().trim().min(10, "Please enter at least 10 characters.").max(2000),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => { const key = String(issue.path[0]); if (!nextErrors[key]) nextErrors[key] = issue.message; });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: serviceId, template_id: templateId, user_id: publicKey, template_params: result.data }),
      });
      if (!response.ok) throw new Error("Email delivery failed");
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="section-shell section-muted">
      <div className="section-inner contact-layout">
        <div>
          <SectionHeading id="contact" eyebrow="Contact" title="Let’s Connect" />
          <p className="contact-intro reveal">I&apos;m always open to learning opportunities, collaborations, interesting projects and conversations around technology, data and AI.</p>
          <div className="contact-list reveal"><a href={`mailto:${portfolio.email}`}><Mail /><span>Email<strong>{portfolio.email}</strong></span></a><a href={`tel:${portfolio.phone.replaceAll(" ", "")}`}><Phone /><span>Phone<strong>{portfolio.phone}</strong></span></a><div><MapPin /><span>Location<strong>{portfolio.location}</strong></span></div></div>
          <div className="resume-actions reveal"><Button asChild><a href={portfolio.resumePath} download><Download />Download Resume</a></Button><Button asChild variant="outline"><a href={portfolio.resumePath} target="_blank" rel="noreferrer"><ExternalLink />View Resume</a></Button></div>
        </div>
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="form-field"><label htmlFor="contact-name">Name</label><Input id="contact-name" name="name" autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />{errors.name ? <span id="name-error" className="field-error">{errors.name}</span> : null}</div>
          <div className="form-field"><label htmlFor="contact-email">Email</label><Input id="contact-email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />{errors.email ? <span id="email-error" className="field-error">{errors.email}</span> : null}</div>
          <div className="form-field form-full"><label htmlFor="contact-subject">Subject</label><Input id="contact-subject" name="subject" maxLength={150} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} placeholder="What would you like to discuss?" />{errors.subject ? <span id="subject-error" className="field-error">{errors.subject}</span> : null}</div>
          <div className="form-field form-full"><label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" maxLength={2000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Write your message here..." />{errors.message ? <span id="message-error" className="field-error">{errors.message}</span> : null}</div>
          <div className="form-submit form-full"><Button size="lg" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Message"}<Send /></Button><div className={cn("form-status", status)} role="status" aria-live="polite">{status === "success" ? "Message sent successfully!" : status === "error" ? "Something went wrong. Please try again." : ""}</div></div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid"><div><a href="#home" className="wordmark"><span>RK</span><strong>{portfolio.name}</strong></a><p>{portfolio.title}</p></div><div><strong>Quick links</strong>{[["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><strong>Profiles</strong>{Object.values(portfolio.social).map((profile) => <span key={profile.label} title={profile.note}>{profile.label} · Placeholder</span>)}</div><div><strong>Contact</strong><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></div></div>
      <div className="section-inner footer-bottom"><span>© 2026 Rohit Kumar. All rights reserved.</span><Button variant="ghost" size="icon" aria-label="Back to top" title="Back to top" onClick={() => scrollToSection("home")}><ArrowUp /></Button></div>
    </footer>
  );
}

export function PortfolioPage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.visible)"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { elements.forEach((element) => element.classList.add("visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><Navbar /><main><Hero /><About /><Education /><Skills /><Projects /><Experience /><Hackathon /><Achievements /><Profiles /><Contact /></main><Footer /></>;
}