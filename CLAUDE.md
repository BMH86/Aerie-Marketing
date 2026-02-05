# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aerie Marketing Site** - A single-page marketing website for Aerie, Pandion Development Management's proprietary project management platform. Built with React 19, TypeScript, Vite 7, and Tailwind CSS with shadcn/ui components.

**Brand Identity:**
- Primary Navy: `#1E3A5F` (used for headers, primary buttons)
- Gold Accent: `#EAAA00` (used for CTAs, highlights)
- Steel Gray: `#505759` (used for body text)
- Brand fonts: Inter (UI), Roboto Mono (code)

## Development Commands

### Core Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # TypeScript compile + production build
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
```

### Testing
```bash
npm run test         # Run tests in watch mode
npm run test:ui      # Run tests with visual UI
npm run test:run     # Run tests once (CI mode)
npm run test:coverage # Run tests with coverage report
```

**Note:** Test runner has configuration issues (see docs/NEXT_STEPS.md #2). Tests are written but not executing.

## Architecture

### Project Structure
```
src/
├── App.tsx              # Main application (833 lines - monolithic)
├── main.tsx             # React root entry point
├── index.css            # Global styles + Aerie brand CSS variables
├── components/
│   └── ui/              # shadcn/ui components (50+ components)
├── hooks/
│   └── use-mobile.ts    # Mobile breakpoint detection hook
├── lib/
│   └── utils.ts         # Tailwind class merging utility
└── test/
    └── setup.ts         # Vitest configuration
```

### Single-Page Application Pattern

This is a **single-page application** with smooth scroll navigation. All content lives in `src/App.tsx`:
- Navigation scrolls to sections using `scrollToSection()` helper
- No routing library (React Router not installed)
- Sections: Hero, Features, Reports, Why Pandion, Project Types, Contact
- Two dialogs: Contact form modal, Login redirect modal

### Component Library: shadcn/ui

This project uses **shadcn/ui** (not a traditional npm package):
- Components are copied into `src/components/ui/` and owned by the project
- Configured via `components.json` with "new-york" style
- Uses Radix UI primitives under the hood
- Path alias `@/` resolves to `src/` (configured in vite.config.ts and tsconfig)

**To add new shadcn/ui components:**
```bash
npx shadcn@latest add <component-name>
```

### Styling System

**Tailwind CSS** with custom Aerie brand configuration:
- Brand colors defined as CSS variables in `src/index.css`
- Custom utility classes: `.btn-primary`, `.btn-secondary`, `.container-aerie`, `.card-hover`
- Responsive: uses Tailwind breakpoints (sm, md, lg, xl)
- Custom animations: fade-in, slide-up, scale-in with easing curves
- Reduced motion support for accessibility

**Important CSS classes:**
- `.container-aerie` - Max-width container with responsive padding
- `.section-padding` - Consistent vertical spacing (py-20 lg:py-28)
- `.text-gradient-gold` - Gold gradient text effect
- `.nav-link` - Navigation link with underline hover effect

### State Management

**No global state library** - uses React hooks only:
- `useState` for UI state (dialogs, mobile menu, active feature tab)
- `useEffect` for scroll listener and mobile detection
- Form state managed via native FormData API

### Path Aliases

TypeScript and Vite both configured with `@/` alias:
```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## Key Architectural Decisions

### 1. Monolithic App Component
**Current State:** All UI in `src/App.tsx` (833 lines)
- **Pros:** Simple, no prop drilling, easy to understand flow
- **Cons:** Hard to test, difficult to maintain
- **Future:** Should be refactored into smaller components (see docs/NEXT_STEPS.md #6)

### 2. Contact Form Implementation
**Critical:** Forms collect data but don't submit to backend yet
- Location: `handleContactSubmit` in src/App.tsx:55-80
- Currently shows success toast but doesn't send data
- **TODO:** Implement API endpoint (see docs/NEXT_STEPS.md #1)
- FormData extraction is implemented and typed correctly

### 3. Accessibility Compliance
- WCAG 2.1 compliant with eslint-plugin-jsx-a11y
- All forms have proper label associations (`htmlFor` + `id`)
- Mobile menu has ARIA attributes (`aria-expanded`, `aria-controls`)
- Navigation buttons have `aria-label` attributes
- Reduced motion support via CSS media query

### 4. Image Assets
Images are in `/public/assets/`:
- Logo variations: `AERIE-Horizontal.png`, `ApexWings-MonoWhite.png`, `ApexWings-Full Color.png`
- Screenshots: `image.png`, `image(1).png`
- PDFs: Sample reports in `/public/assets/*.pdf`

Access in code: `/assets/filename.png` (Vite resolves from public folder)

## TypeScript Configuration

Three tsconfig files:
- `tsconfig.json` - Base config
- `tsconfig.app.json` - App code (src/)
- `tsconfig.node.json` - Build tools (vite.config.ts)

**Important:** ESLint uses type-aware linting with `recommendedTypeChecked` rules. When adding new code:
- Avoid `any` types (warns)
- Handle promises properly (`@typescript-eslint/no-floating-promises` is error)
- Use explicit types for function parameters

## ESLint Rules

Key custom rules in `eslint.config.js`:
- **React Hooks:** `exhaustive-deps` warns (not error) to allow intentional dependency omissions
- **Console:** `no-console` warns but allows `console.warn` and `console.error`
- **Accessibility:** jsx-a11y plugin enforces WCAG 2.1 standards
- **TypeScript:** Strict type checking enabled with type-aware rules

## Testing Infrastructure

**Vitest** with React Testing Library:
- Config: `vitest.config.ts`
- Setup: `src/test/setup.ts` (imports @testing-library/jest-dom)
- Environment: jsdom for DOM testing
- Coverage: v8 provider with HTML/JSON/text reports

**Test files:**
- `src/App.test.tsx` - 11 component tests
- `src/hooks/use-mobile.test.ts` - 6 hook tests

**Known Issue:** Tests written but not running (config debugging needed)

## Build Configuration

**Vite 7** with custom settings:
- Base path: `./` (for flexible deployment)
- Plugin: `kimi-plugin-inspect-react` for component inspection
- Path alias: `@/` → `src/`
- React plugin with Fast Refresh

**Production build:**
```bash
npm run build
# Output: dist/ folder
# TypeScript compiles first, then Vite bundles
```

## Common Development Tasks

### Adding a New Section to App.tsx
1. Define section content in a const (e.g., features array)
2. Create `<section id="section-name">` with proper spacing classes
3. Add navigation button that calls `scrollToSection('section-name')`
4. Update mobile menu if needed
5. Add to footer navigation if appropriate

### Adding a New shadcn/ui Component
```bash
npx shadcn@latest add <component-name>
# Component appears in src/components/ui/
# Import: import { ComponentName } from '@/components/ui/component-name'
```

### Modifying Brand Colors
Edit CSS variables in `src/index.css` lines 8-36. Colors use HSL format:
```css
--aerie-navy: 210 52% 24%;  /* H S L */
```

### Adding Form Fields
1. Add `<Input>` or `<Textarea>` with `name` attribute
2. Add `<label>` with matching `htmlFor` and `id` on input
3. Update FormData extraction in `handleContactSubmit`
4. Add TypeScript type for the data object

### Working with Icons
Uses **lucide-react** icon library:
```typescript
import { IconName } from 'lucide-react'
<IconName className="w-5 h-5" />
```

**Known Issue:** `Linkedin`, `Twitter`, `Youtube` icons deprecated (still functional, see docs/CODE_REVIEW_SUMMARY.md)

## Deployment Notes

**Not configured yet** but likely targets:
- Vercel (recommended for Vite/React)
- Netlify
- Static hosting (S3 + CloudFront)

Build output is in `dist/` folder, fully static.

**Base path:** Currently `./` which works for root domain deployment. Update `vite.config.ts` `base` option if deploying to subdirectory.

## Known Issues & Limitations

1. **Test runner not executing** - Configuration issue prevents tests from running (see docs/NEXT_STEPS.md #2)
2. **No backend API** - Contact forms collect data but don't submit anywhere (see docs/NEXT_STEPS.md #1)
3. **Monolithic component** - App.tsx should be refactored into smaller components (low priority)
4. **Icon deprecations** - Three social media icons show deprecation warnings (cosmetic only)

## Documentation

- **docs/NEXT_STEPS.md** - Comprehensive roadmap of future work (13 sections)
- **docs/CODE_REVIEW_SUMMARY.md** - Full code review results from Feb 4, 2026

## Important Files to Understand

1. **src/App.tsx** - Entire UI lives here
2. **src/index.css** - Brand colors, custom utilities, animations
3. **vite.config.ts** - Path alias and plugin configuration
4. **eslint.config.js** - Linting rules including accessibility
5. **tailwind.config.js** - Tailwind theme extensions
6. **components.json** - shadcn/ui configuration

## Git Workflow

- **Main branch:** `main`
- **Recent commits:** Focus on code review fixes and testing infrastructure
- No CI/CD configured yet

## Project Context

This is a **marketing site** for Aerie (Pandion's project management platform), not the actual Aerie application. It:
- Showcases features with screenshots
- Provides contact forms for lead generation
- Links to actual Aerie platform at `https://www.aeriepm.com`
- Links to Pandion corporate site at `https://www.pandion-dms.com`

Target audience: Construction project owners looking for owner's representative services.
