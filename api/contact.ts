import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const ContactPayload = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  fullName: z.string(),
  phone: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  service: z.string().optional().default(""),
  emergencyStatus: z.enum([
    "Yes, I need help immediately",
    "No, this is a regular request",
  ]),
  contactMethod: z.string(),
  message: z.string().optional().default(""),
  consent: z.boolean(),
  submittedAt: z.string(),
  source: z.string(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const normalUrl = process.env["PABBLY_NORMAL_WEBHOOK_URL"];
  const emergencyUrl = process.env["PABBLY_EMERGENCY_WEBHOOK_URL"];

  if (!normalUrl || !emergencyUrl) {
    console.error("Pabbly webhook URLs are not configured in environment variables");
    return res
      .status(503)
      .json({ error: "Form service is not configured. Please call us directly." });
  }

  const parsed = ContactPayload.safeParse(req.body);
  if (!parsed.success) {
    console.warn("Invalid contact form payload", parsed.error.issues);
    return res
      .status(400)
      .json({ error: "Invalid form data. Please check all required fields." });
  }

  const payload = parsed.data;
  const webhookUrl =
    payload.emergencyStatus === "Yes, I need help immediately"
      ? emergencyUrl
      : normalUrl;

  try {
    const pabblyRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!pabblyRes.ok) {
      console.error("Pabbly webhook returned non-OK status", pabblyRes.status);
      return res.status(502).json({
        error:
          "Could not send your request. Please try again or call us directly.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Network error forwarding to Pabbly webhook", err);
    return res.status(502).json({
      error:
        "Could not send your request. Please try again or call us directly.",
    });
  }
}
