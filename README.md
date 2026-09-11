# Quantix Clone

A modern, responsive React-based recreation of the "Quantix SaaS" landing page (originally from TemplateMo).

## Features

- **Responsive Layout**: Fluid design scaling across mobile, tablet, and desktop viewports.
- **Navigation**: Sticky navbar with a smooth, slide-in overlay menu for mobile devices.
- **Hero Section**: High-impact header with gradient styling and a simulated metrics mockup.
- **Features Showcase**: Interactive tabbed navigation (Dashboard, Funnels, SDK, Session Replay, Privacy) displaying dynamic UI mockups.
- **Statistics**: Animated count-up numbers triggered dynamically upon scrolling into view.
- **Pricing**: Interactive Monthly/Annually toggle switch with smooth CSS opacity and transform transitions.
- **Call to Action (CTA)**: Subscription form matching the original template's gradient aesthetics.
- **Performance-First Animations**: Custom `FadeUp` component for scroll-triggered entrance animations, eliminating the need for heavy external animation libraries.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Icons**: Lucide React (`lucide-react`)
- **Language**: JavaScript

## Project Structure

*   `src/main.jsx` — Application entry point.
*   `src/App.jsx` — Main page composition and centralized data definitions (e.g., pricing plans, stats).
*   `src/index.css` — Global styles, CSS variables (Tailwind v4 theme setup), and base keyframe animations.
*   `src/components/` — Reusable layout components:
    *   `Navbar.jsx`, `Hero.jsx`, `Features.jsx`, `FeatureShowcase.jsx`, `Stats.jsx`, `Pricing.jsx`, `CTA.jsx`, `Footer.jsx` — Core sections.
    *   `FadeUp.jsx` — Reusable Intersection Observer wrapper for fade-in animations.
    *   `CountUp.jsx` — Reusable component for animating number counters.

## Getting Started

To run this project locally:

1.  Navigate to the project directory:
    ```bash
    cd quantix-clone
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development server:
    ```bash
    npm run dev
    ```

## Production Build

To create an optimized production build:
```bash
npm run build
```

To preview the generated production build locally:
```bash
npm run preview
```

## Responsive Design

The application utilizes Tailwind's mobile-first utility classes (`sm:`, `md:`, `lg:`) to ensure an optimal user experience:
- **Mobile (< 640px)**: Stacked grids, adjusted padding, horizontal-scrollable code blocks, and a sliding side-menu to maximize screen real-estate.
- **Tablet (640px - 1024px)**: Balanced spacing and responsive column grids.
- **Desktop (> 1024px)**: Full-width interactive mockups and spacious side-by-side layouts respecting the premium design identity.

## Development Workflow

The development followed a structured, component-driven implementation strategy, moving progressively through foundation building, interactivity, animations, and a strict responsive refinement phase. Standard Git workflows involving feature implementation and merging into the `main` branch were utilized.

## Credits / Attribution

This project is an inspired recreation of the [Quantix SaaS Template](https://templatemo.com/live/templatemo_614_quantix_saas) designed by TemplateMo. 

## Disclaimer

This is a portfolio project created for educational and demonstration purposes. It does not contain an explicit open-source license. The original design concept and rights belong to TemplateMo.
