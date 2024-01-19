import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  apiKey: import.meta.env.VITE_API_KEY || '',
  serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN || '',
})