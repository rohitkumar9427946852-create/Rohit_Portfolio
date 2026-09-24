# Rohit Kumar Portfolio

## Build
- Create a dark-first, recruiter-focused single-page portfolio with a restrained blue–indigo accent system, strong typography, and custom AI/data visuals.
- Add reusable sections for navigation, introduction, about, education, skills, projects, training, technical work, achievements, profiles, contact, and footer.
- Centralize all editable portfolio content and visibly label unavailable profile/project links as placeholders.
- Add responsive navigation, theme switching, smooth scrolling, reduced-motion support, accessible controls, and subtle reveal/hover effects.
- Add a validated EmailJS-ready contact form using environment variables, plus resume view/download links using the requested placeholder path.

## Quality checks
- Add route-specific SEO and social metadata.
- Verify desktop, tablet, and mobile layouts, menu/theme/form interactions, horizontal overflow, console errors, and placeholder behavior.
- Run the project’s automated checks and resolve relevant errors.

## Technical details
- Keep TanStack Start’s existing routing and Tailwind v4 setup.
- Use React, existing Lucide icons, shadcn controls, and lightweight CSS/IntersectionObserver animations rather than adding an animation dependency.
- Submit through EmailJS only when all three public configuration values exist; otherwise show a clear setup message without exposing credentials.
