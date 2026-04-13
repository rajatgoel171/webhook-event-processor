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





























## Random Update 9

- 2026-04-13: captured a repository-specific status note with no sequential date pattern.
- Documented work progress, validation, and operational context for webhook-event-processor.
