import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-cms-t",
    // 本当は隠す、githubにはapikeyを共有してはいけない
    // apiKey: process.env.API_KEY,
    apiKey: LEnTvtpjzh9eDsq2K3U7VjuLYeiRGOh7zPkA
});


