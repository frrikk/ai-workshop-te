import { z } from "zod";

const envSchema = z.object({
  STUDIO_SECRET: z.string().min(1),
  NEXT_PUBLIC_STUDIO_ENDPOINT: z.httpUrl(),
  NEXT_PUBLIC_DIRECT_LINE_ENDPOINT: z.httpUrl(),
  BASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
