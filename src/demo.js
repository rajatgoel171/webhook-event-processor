import { WebhookProcessor } from "./processor.js";
import { signPayload } from "./signature.js";

const secret = "local-demo-secret";
const payload = { customerId: "cus_001", amount: 499 };
const timestamp = Date.now();

const processor = new WebhookProcessor({ secret });
processor.on("invoice.paid", async (event) => ({ credited: event.amount }));

const result = await processor.process({
  eventId: "evt_001",
  eventType: "invoice.paid",
  timestamp,
  payload,
  signature: signPayload({ secret, timestamp, body: JSON.stringify(payload) }),
});

console.log(JSON.stringify(result, null, 2));
