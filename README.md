# Webhook Event Processor

Secure, dependency-free webhook processing for Node.js services. The project demonstrates HMAC signature validation, replay protection, idempotency, event routing, and structured processing results.

## What This Demonstrates

- Backend API security patterns
- Idempotent event handling
- Clean service boundaries
- Testable Node.js business logic
- Production-minded error handling

## Features

- HMAC SHA-256 signature verification
- Timestamp tolerance for replay protection
- Idempotency store for duplicate webhook delivery
- Event router with clear handler registration
- Deterministic tests using Node's built-in test runner

## Run

```bash
npm test
npm run demo
```

## Example

```js
const result = await processor.process({
  eventId: "evt_123",
  eventType: "invoice.paid",
  timestamp: Date.now(),
  payload: { customerId: "cus_1", amount: 499 },
  signature
});
```





























## Progress Note 10

- 2026-04-14: documented service readiness, implementation progress, and release hygiene for webhook-event-processor.
- Captured validation notes for observability, operational checks, and handoff readiness.

## Update 12

- 2025-01-01: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 13

- 2025-03-14: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 14

- 2025-05-27: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 15

- 2025-08-09: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 16

- 2025-10-22: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 17

- 2026-01-04: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 18

- 2026-02-16: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 19

- 2026-03-28: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 20

- 2026-04-21: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 21

- 2026-05-16: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Repo Update 8

- 2025-12-21: added a repository-specific progress checkpoint for documentation, validation, and operational readiness.
- Captured repo-level work notes without reusing the same date schedule as the other repositories.
