import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN || '',
})