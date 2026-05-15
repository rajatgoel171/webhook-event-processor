import assert from "node:assert/strict";
import { test } from "node:test";
import { WebhookProcessor } from "../src/processor.js";
import { signPayload } from "../src/signature.js";

test("processes verified webhook once", async () => {
  const secret = "test-secret";
  const payload = { amount: 100 };
  const timestamp = Date.now();
  const processor = new WebhookProcessor({ secret });
  processor.on("invoice.paid", async (event) => ({ amount: event.amount }));

  const event = {
    eventId: "evt_1",
    eventType: "invoice.paid",
    timestamp,
    payload,
    signature: signPayload({ secret, timestamp, body: JSON.stringify(payload) }),
  };

  assert.equal((await processor.process(event)).status, "processed");
  assert.equal((await processor.process(event)).status, "skipped");
});

test("rejects invalid signatures", async () => {
  const processor = new WebhookProcessor({ secret: "test-secret" });
  const result = await processor.process({
    eventId: "evt_2",
    eventType: "invoice.paid",
    timestamp: Date.now(),
    payload: { amount: 100 },
    signature: "bad-signature",
  });

  assert.deepEqual(result, { status: "rejected", reason: "invalid_signature" });
});
