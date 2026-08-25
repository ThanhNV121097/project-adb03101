# SRS — general

Module: `general`
Last updated: 2025-08-14
Design: [View the approved design](http://localhost:8080/design/adb03101-d90b-4da0-ba14-1c72b2a58626)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

`general` delivers the project's only user-facing screen: one plain landing page that proves the full stack works end to end. A visitor gets centered text on a white screen, with the text value coming from PostgreSQL through backend API instead of being hardcoded in frontend. If this module does not exist, project has no visible proof that storage, API, and rendering are wired together.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Any browser user, signed in or not | Open landing page and read centered message |
| System | Backend, database, and frontend together | Store message, serve it through API, and render it on page |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hello Word landing page

**Out of scope**

- Authentication — belongs to a different module if added later.
- Editing the message — deliberately not built; project brief asks for one fixed delivered message only.
- Multiple pages, navigation, animations, themes, or alternate states — not in approved design.

## 4. Functional requirements

### 4.1 Hello Word landing page

**Requirement GENERAL-001 — show centered message**

*As a* Visitor, *I want to* see one centered message on page load, *so that* I can read the screen shown in the approved design.

Behaviour:

1. When Visitor opens landing page, system shows one message centered horizontally and vertically on plain white background.
2. The visible message text is `Hello Word` exactly, with same casing and spacing as in approved design.
3. No other visible content appears on the page.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/general/test-cases/hello-word-landing-page.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Visitor opens landing page | Page loads successfully | One message is centered horizontally and vertically on white background |
| AC-2 | Page renders | Visitor reads visible content | Visible text is `Hello Word` exactly |
| AC-3 | Page renders | Visitor scans screen | No other visible content appears |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| — | — | Not applicable: approved design shows one read-only screen with no roles, no write actions, and no loading, empty, or error state in the design |

**Data touched** — the fields this function reads and writes, in product terms.

| Field | Type | Required | Rule |
|---|---|---|---|
| landing page message text | text | yes | One non-empty string shown on the landing page |

## 5. Screens

The design is source of truth for appearance; this section maps functions onto it so nothing in design is unaccounted for and nothing specified here is missing from design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hello Word landing page | Single full-page message | GENERAL-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Landing page shows centered text within 2 seconds after browser receives HTTP 200 response from app on a typical local deployment. |
| Accessibility | Message remains readable with black text on white background and centered content does not rely on color alone. |
| Responsive | Page stays centered from 320px width upward with no horizontal scroll. |
| Privacy | No personal data is stored or displayed. |

## 7. Dependencies and assumptions

- **Depends on:** PostgreSQL, for storing one landing page message row.
- **Depends on:** Backend API, for reading stored text and returning it to frontend.
- **Assumption:** One row is sufficient for this module; if more rows become needed later, module scope changes.
- **Assumption:** Approved design's single default state is complete; no loading, empty, or error state is part of screen design.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | None | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hello Word landing page | GENERAL-001 | `docs/general/test-cases/hello-word-landing-page.md` |
