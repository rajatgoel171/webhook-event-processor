import crypto from "node:crypto";

export function signPayload({ secret, timestamp, body }) {
  return crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${body}`)
    .digest("hex");
}

export function verifySignature({ secret, timestamp, body, signature, toleranceMs = 300_000 }) {
  if (!secret || !timestamp || !body || !signature) return false;
  if (Math.abs(Date.now() - Number(timestamp)) > toleranceMs) return false;

  const expected = signPayload({ secret, timestamp, body });
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  if (expectedBuffer.length !== signatureBuffer.length) return false;

  return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
}
