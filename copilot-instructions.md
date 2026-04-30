# Portfolio Repository Rules

These rules are mandatory for every future update in this repository.

## 1. Core Principles
- Keep the portfolio premium, modern, and conversion-focused.
- Prioritize clarity, performance, accessibility, and maintainability over flashy complexity.
- Make small, targeted changes; avoid unrelated edits.

## 2. Tech and Structure
- Use **Next.js (App Router) + TypeScript** patterns already in the project.
- Reuse existing section/component styles before adding new patterns.
- Keep content/data definitions near their related section unless shared globally.

## 3. UI/UX Rules
- Preserve the current visual identity (dark premium theme, accent gradients, clean spacing).
- New interactions must be subtle and purposeful.
- Never add animations that reduce readability or perceived performance.
- Keep conversion CTAs visible and consistent ("Book a Project Call", contact actions).

## 4. Responsiveness and Accessibility
- Every UI change must work on mobile, tablet, and desktop.
- Use semantic HTML and keep keyboard navigation intact.
- Respect `prefers-reduced-motion`.
- Maintain strong color contrast and visible focus states.

## 5. Performance Rules
- Prefer static/server-rendered content where possible.
- Optimize heavy assets (images, icons, external scripts).
- Avoid unnecessary client-side JS and oversized animation libraries.

## 6. Content and Messaging
- Write concise, proof-driven copy focused on outcomes and impact.
- Highlight strengths in **Mobile + Web + IoT** integration.
- Avoid generic skill dumps without context.

## 7. Quality Gates (Before Finishing Any Update)
1. Run `npm run lint`.
2. Run `npm run build` for structural or logic changes.
3. Fix all errors introduced by the update.

## 8. Update Workflow
1. Understand the requested change and locate impacted files.
2. Implement the smallest complete solution.
3. Validate with required quality gates.
4. Keep the portfolio cohesive with existing design and messaging.

## 9. Non-Negotiables
- Do not commit secrets or sensitive data.
- Do not introduce dead code, placeholder text, or unused dependencies.
- Do not break existing sections while adding new ones.
