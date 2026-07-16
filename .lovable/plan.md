Change the site name from "Universo das Cores" to "PatolinoPlay" everywhere it appears in the codebase.

Files to update:
- `src/components/site/Logo.tsx` — split wordmark into "Patolino" (white) + "Play" (gold) to preserve the current visual style.
- `src/components/site/Footer.tsx` — replace name in description, copyright, and keep the messaging as a kids' creative app.
- `src/components/site/Hero.tsx` — update the hero image alt text.
- `src/components/site/BibleBanner.tsx` — update banner image alt text.
- `src/components/site/FAQ.tsx` — update the mobile compatibility answer.
- `src/components/site/Testimonials.tsx` — update the testimonial quote.
- `src/routes/__root.tsx` — update title, author, and og:title meta tags.
- `src/styles.css` — update the section comment for the landing tokens.

What will NOT change unless requested:
- Tagline copy ("O app de colorir mais divertido para crianças" / "App infantil de colorir") stays the same.
- Domain/project slug is not affected.
- Generated asset filenames remain unchanged.

After edits, run a typecheck to confirm no broken imports and verify the preview renders the new name in the navbar, hero, footer, and meta tags.