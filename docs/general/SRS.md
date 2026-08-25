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

**Requirement GENERAL-001 — show stored message in page center**

*As a* Visitor, *I want to* see one centered message on page load, *so that* I can confirm app renders stored content end to end.

Behaviour:

1. When Visitor opens landing page, system shows one centered message on plain white background.
2. When backend API returns stored text value, frontend uses returned value for visible message.
3. When database value is "Hello Word", page shows "Hello Word" exactly, with same casing and spacing.
4. When text value changes in stored row, next page load shows latest stored value returned by API.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/general/test-cases/hello-word-landing-page.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Visitor opens landing page | Page loads successfully | One message is centered horizontally and vertically on white background |
| AC-2 | Stored row contains `Hello Word` | Page requests message from API and renders response | Visible text is `Hello Word` exactly |
| AC-3 | Stored row contains a different non-empty message | Visitor reloads page after backend serves new value | Page shows new stored value and no hardcoded fallback text |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| — | — | Not applicable: approved design shows one read-only screen with no roles, no write actions, and no loading, empty, or error state in the design |

**Data touched** — the fields this function reads and writes, in product terms.

| Field | Type | Required | Rule |
|---|---|---|---|
| landing page message text | text | yes | One non-empty string stored in PostgreSQL and returned by API without client-side hardcoding |

## 5. Screens

The design is source of truth for appearance; this section maps functions onto it so nothing in design is unaccounted for and nothing specified here is missing from design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hello Word landing page | Single full-page message | GENERAL-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Landing page renders centered text within 2 seconds on a typical local deployment after browser receives response. |
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
