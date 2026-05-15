import { verifySignature } from "./signature.js";

export class WebhookProcessor {
  constructor({ secret, idempotencyStore = new Set() }) {
    this.secret = secret;
    this.idempotencyStore = idempotencyStore;
    this.handlers = new Map();
  }

  on(eventType, handler) {
    this.handlers.set(eventType, handler);
  }

  async process(event) {
    const body = JSON.stringify(event.payload);
    const verified = verifySignature({
      secret: this.secret,
      timestamp: event.timestamp,
      body,
      signature: event.signature,
    });

    if (!verified) return { status: "rejected", reason: "invalid_signature" };
    if (this.idempotencyStore.has(event.eventId)) return { status: "skipped", reason: "duplicate_event" };

    const handler = this.handlers.get(event.eventType);
    if (!handler) return { status: "ignored", reason: "unhandled_event_type" };

    const output = await handler(event.payload);
    this.idempotencyStore.add(event.eventId);
    return { status: "processed", eventId: event.eventId, output };
  }
}
