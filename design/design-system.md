# Design System — hello-word-16

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-08-12

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-text` | `#000000` | Body text |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `21:1` | AA / AA Large |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-12` | `48px` |

### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Arial, Helvetica, sans-serif` (system stack, no external load)
- Headings: `Arial, Helvetica, sans-serif` (system stack, no external load)
- Mono: not used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | not used | not used | not used | not used |
| `--text-sm` | not used | not used | not used | not used |
| `--text-base` | not used | not used | not used | not used |
| `--text-lg` | not used | not used | not used | not used |
| `--text-xl` | not used | not used | not used | not used |
| `--text-2xl` | not used | not used | not used | not used |
| `--text-3xl` | `clamp(2.5rem, 8vw, 6rem)` | `1` | `400` | Centered message |

Heading levels are used in order and never skipped for visual sizing.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | not used | not used |
| `--radius-md` | not used | not used |
| `--radius-lg` | not used | not used |
| `--radius-full` | not used | not used |
| `--border-width` | not used | not used |
| `--shadow-sm` | not used | not used |
| `--shadow-md` | not used | not used |
| `--shadow-lg` | not used | not used |
| `--duration-fast` | not used | not used |
| `--duration-base` | not used | not used |
| `--easing` | not used | not used |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | not used | not used | not used | not used |
| `md` | not used | not used | not used | not used |
| `lg` | not used | not used | not used | not used |
| `xl` | not used | not used | not used | not used |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | not used |
| Dropdown | not used |
| Modal backdrop | not used |
| Modal | not used |
| Toast | not used |
## 2. Components

One subsection per reusable component. Every component lists **all** states.

### 2.1 Centered message

**Purpose** — Static full-page message. Use for this single proof screen only; not for interactive content.

**Anatomy** — `[main] [h1]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-bg`, `--color-text`, `--text-3xl` | Single centered page message |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | viewport-height | none | `--text-3xl` |

**States** — every row must be filled in.

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered black text on white background | `--color-bg`, `--color-text`, `--text-3xl` |
| Hover | No hover affordance | none |
| Focus (keyboard) | No interactive focus target | none |
| Active / pressed | No active state | none |
| Disabled | Not applicable | none |
| Loading | Not present in approved design | none |
| Error | Not present in approved design | none |
| Empty | Not present in approved design | none |

**Accessibility** — static content, no role beyond semantic heading and landmark. Main content is readable at any viewport size. No interactive hit target.

## 3. Content and formatting

- Voice and tone in one line: plain, minimal, literal.
- Date, time, number, and currency formats: not used.
- Capitalization rule for buttons, headings, and labels: sentence case as shown in `Hello Word`.
- Empty-state and error-message wording pattern: not used.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Layout | Uses no documented breakpoint, radius, shadow, border, motion, or z-index tokens | One-screen proof page only | Keep tokens absent until UI needs them |
| Typography | Uses `clamp(2.5rem, 8vw, 6rem)` directly instead of a named text scale token for the displayed heading | Approved mockup only has one size | Add scale token if more text styles appear |
| Component states | Static page has no hover, focus, active, loading, error, or empty states | No interactive elements in design | None |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-08-12 | Initial design system from approved one-screen mockup | pending |
