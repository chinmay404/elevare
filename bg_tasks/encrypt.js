import { kmsClient } from "./kms.js";

export async function encrypt(data) {
  const name = kmsClient.cryptoKeyPath(
    process.env.GOOGLE_PROJECT_ID,
    process.env.GOOGLE_LOCATION_ID,
    process.env.GOOGLE_KEY_RING_ID,
    process.env.GOOGLE_CRYPTO_KEY_ID,
  );

  const [result] = await kmsClient.encrypt({
    name,
    plaintext: Buffer.from(data),
  });

  //@ts-ignore
  return result.ciphertext?.toString("base64");
}
