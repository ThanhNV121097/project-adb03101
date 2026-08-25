# Test Cases — Hello Word landing page

Risk level: low. One read-only screen, one API read, one stored value, no user input.

## Cases

### Scenario: Centered message on plain white screen
**Given** Visitor opens landing page and backend returns HTTP 200 from `GET /v1/message` with JSON body `{ "text": "Hello Word" }`
**When** Page loads successfully
**Then** Browser displays one message centered horizontally and vertically on plain white background
**Check:** measure_styles

### Scenario: Visible text exactly matches stored message
**Given** Visitor opens landing page and backend returns HTTP 200 from `GET /v1/message` with JSON body `{ "text": "Hello Word" }`
**When** Page renders and Visitor reads visible content
**Then** Visible text is exactly `Hello Word`
**Check:** render_url

### Scenario: No extra visible content on page
**Given** Visitor opens landing page and backend returns HTTP 200 from `GET /v1/message` with JSON body `{ "text": "Hello Word" }`
**When** Visitor scans screen
**Then** No other visible content appears beyond the centered message
**Check:** render_url

### Scenario: API success shape for landing message
**Given** Client sends request to `GET /v1/message`
**When** Backend reads stored message successfully
**Then** Response status is HTTP 200, Content-Type is JSON, and body is exactly `{ "text": "Hello Word" }`
**Check:** fetch_url

### Scenario: Backend error envelope when message row missing
**Given** Client sends request to `GET /v1/message` and singleton message row is missing
**When** Backend tries to read landing message
**Then** Response status is HTTP 500 with JSON error envelope containing `code: internal_error` and safe message `Internal server error`
**Check:** fetch_url

### Scenario: Backend error envelope when database unavailable
**Given** Client sends request to `GET /v1/message` and database is unavailable
**When** Backend tries to read landing message
**Then** Response status is HTTP 500 with JSON error envelope containing `code: internal_error` and safe message `Internal server error`
**Check:** fetch_url

### Scenario: Frontend reads message from API instead of hardcoding copy
**Given** Backend returns HTTP 200 from `GET /v1/message` with JSON body `{ "text": "Hello Word" }`
**When** Page renders
**Then** Browser shows returned text from API and React component does not supply alternate product copy
**Check:** render_url

### Scenario: No animation on landing page
**Given** Visitor opens landing page and backend returns HTTP 200 from `GET /v1/message` with JSON body `{ "text": "Hello Word" }`
**When** Page renders and remains visible
**Then** No animation is observed in the displayed content
**Check:** measure_styles
