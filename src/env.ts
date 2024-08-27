import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  client: {
    NEXT_PUBLIC_FORM: z.string().min(1, "Please provide a valid form ID"),
    NEXT_PUBLIC_SITE_URL: z.string().url(
      "Please provide a valid URL for your form site"
    ),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1, "Please provide a valid PostHog key"),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url(
      "Please provide a valid URL for your PostHog host"
    ),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_FORM: process.env.NEXT_PUBLIC_FORM,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  }
});