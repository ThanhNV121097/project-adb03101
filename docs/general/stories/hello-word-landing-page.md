# Story — Hello Word landing page

## User story

As a Visitor, I want to see one centered message on page load, so that I can read the screen shown in the approved design.

## In scope

- One full-page landing screen for `hello-word-16`.
- Message text shown centered horizontally and vertically on a plain white background.
- Message text is loaded from PostgreSQL through backend API, not hardcoded in frontend.
- Only default state of the screen.

## Out of scope

- Authentication.
- Editing the message.
- Multiple pages, navigation, themes, motion, animation, or alternate states.
- Loading, empty, or error UI states.

## UI scope

- Single screen: `Hello Word landing page`.
- Matches approved centered-message design.
- Static default state only: white background, black centered text, no extra visible content.

## Acceptance criteria

1. When Visitor opens landing page, page loads successfully and one message is centered horizontally and vertically on white background.
2. Visible text is `Hello Word` exactly.
3. No other visible content appears on the page.
4. Page reads message through backend API, with no hardcoded frontend copy for the displayed text.

## Dependencies

- PostgreSQL row containing landing page message text.
- Backend API endpoint that returns stored message text.
- Approved design and design system for centered-message page.
