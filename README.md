# Kazi Al Ashfaq — Personal Portfolio

A modern, accessible, and interactive personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and EmailJS. This site showcases my experience, skills, and passion for cybersecurity and education.

## Features

- **Terminal-Style Preloader:** Professional typewriter effect with branding, accessible and responsive, appears on every page load.
- **Interactive Terminal Puzzle Game:** Try terminal commands to discover my background, skills, and download my resume.
- **Personalized Sections:**
  - Hero (with professional title and tagline)
  - About Me
  - Experience
  - Skills & Expertise
  - Contact (secure, accessible form)
- **Dark Mode Toggle:** Seamless light/dark theme switching.
- **SVG Icons & Custom Graphics:** Clean, modern visuals.
- **SEO & Open Graph:** Optimized meta tags, favicon, and OG image for sharing and discoverability.
- **Accessibility:** Keyboard navigation, ARIA labels, color contrast, and screen reader support.
- **Security:** All user input sanitized and validated, no sensitive data exposed, secure external links.
- **Ready for Vercel Deployment:** Fully static, optimized, and production-ready.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```text
├── public/                # Static assets (favicon, etc.)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Global layout (preloader, meta, nav)
│   │   ├── page.tsx       # Main page (all sections)
│   │   └── globals.css    # Global styles (Tailwind)
│   └── components/        # All React components
│       ├── Preloader.tsx  # Terminal-style preloader
│       ├── TerminalGame.tsx # Interactive terminal puzzle
│       ├── Hero.tsx, AboutMe.tsx, ...
├── tailwind.config.js     # Tailwind CSS config
├── next.config.ts         # Next.js config
├── tsconfig.json          # TypeScript config
└── README.md              # Project documentation
```

## Usage

- **Terminal Preloader:** Displays on every page load, then fades to reveal the site.
- **Terminal Game:** Type `help` to see available commands. Try `whoami`, `show skills`, `unlock experience`, `ping goals`, `sudo hire kazi`, and more.
- **Contact Form:** Secure, accessible, and connected to EmailJS for direct messages.

## Customization

- Update content in the respective components in `src/components/`.
- Adjust theme colors in `tailwind.config.js`.
- Update SEO/meta in `src/app/layout.tsx`.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Kazi Al Ashfaq** — Cybersecurity Enthusiast & Educator
