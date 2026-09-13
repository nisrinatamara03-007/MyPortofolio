# Nisrina Tamara Lubis — Personal Portfolio

Single-page premium portfolio for **Nisrina Tamara Lubis**, IT Supervisor &
Full Stack Web Developer. Concept: *"The Woman Behind the System"* — a
technical leader who is equally comfortable leading a team, talking to
clients, and writing PHP/MySQL code.

## File structure

```
/
├── index.html
├── css/
│   ├── style.css          (base styles, tokens, layout, components)
│   ├── responsive.css     (tablet & mobile breakpoints)
│   └── animations.css     (keyframes, reveal states, reduced-motion)
├── js/
│   ├── main.js            (navigation, mobile menu, back-to-top)
│   ├── animations.js      (hero video autoplay, scroll reveal, timeline, counters)
│   └── form.js            (contact form validation, simulated success)
├── assets/
│   ├── images/            (drop profile photo / OG image here)
│   ├── icons/favicon.svg
│   ├── videos/intro.mp4   (hero intro video)
│   └── fonts/             (empty — fonts are loaded from Google Fonts CDN)
└── README.md
```

## Hero intro video

The Hero section shows a short looping self-introduction video
(`assets/videos/intro.mp4`) inside a portrait card, in place of a static
photo — the name and role are overlaid as a caption on the video, with a
small mute/unmute button in the corner.

- The video **autoplays muted and loops on every page load** (no "skip
  intro" step, no session storage — it plays fresh every visit, as
  requested).
- Browsers only allow autoplay when a video is muted, so sound stays off
  until the visitor clicks the mute/unmute button.
- If a visitor has `prefers-reduced-motion` enabled, the video is paused
  and the poster frame (`assets/images/video-poster.jpg`) is shown
  instead, to avoid unexpected motion.
- To swap the video later, replace `assets/videos/intro.mp4` (and
  regenerate `assets/images/video-poster.jpg` as its poster/fallback
  frame) — no other file needs to change.

## How to run

No build step needed. Open `index.html` directly in a browser, or serve
the folder with any static file server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## External dependencies

- **Google Fonts** — `Plus Jakarta Sans` (headings) and `Inter` (body),
  loaded via `<link>` tags in `index.html`. No local font files are
  required; if you need an offline build, download the two families into
  `assets/fonts/` and swap the `<link>` tags for local `@font-face` rules.
- No JavaScript libraries, no CSS frameworks, no build tools. Pure
  HTML5 / CSS3 / vanilla ES6+ JavaScript.

## Content rules followed

All content on the page is sourced directly from the CV provided:
no fictional companies, clients, certifications, or skills were added.
Where information wasn't available (e.g. a project not mentioned in the
CV), it was simply omitted rather than invented.

## Notes on the contact form

The contact form (`#contactForm`) is **front-end only**. It validates
name / email / message client-side and shows a success message on
submit, but it does **not** send an actual email — there is no backend
or email service wired up. A note to that effect is shown under the
submit button. To make it functional, connect the `submit` handler in
`js/form.js` to a form backend (e.g. Formspree, a serverless function,
or your own API endpoint).

## Accessibility & performance

- Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`).
- Visible focus states (`:focus-visible`) throughout.
- `aria-expanded` / `aria-controls` on the mobile menu and timeline
  toggles; `aria-live="polite"` on the form success message.
- Respects `prefers-reduced-motion`: animations and scroll-behavior are
  disabled/minimized automatically.
- Scroll-triggered animations use `IntersectionObserver` with a graceful
  fallback (content is shown immediately if unsupported).
- No horizontal overflow at 320px–1440px+ (tested breakpoints: 1440,
  1200, 1024, 768, 480, 375, 320).

## Replacing the hero placeholder

The hero currently uses an abstract SVG/vector illustration (grid lines,
dot pattern, geometric shape) instead of a stock photo, per the design
brief. See `assets/images/README-images.txt` for guidance on dropping in
a real profile photo later.
