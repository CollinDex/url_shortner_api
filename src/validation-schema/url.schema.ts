import { z } from "zod";

export const shortenUrlSchema = z.object({
  url: z
    .string()
    .min(1, { message: "URL cannot be empty" })
    .regex(/^https?:\/\/.+/i, {
      message: "Invalid URL. Must start with http:// or https://",
    }),
});
