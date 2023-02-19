import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-cms-t",
    apiKey: process.env.API_KEY,
});


