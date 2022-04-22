import { defineConfig } from "astro/config";

export default defineConfig({
    srcDir: `./source`,
    publicDir: `./static`,
    outDir: `./output`,
    trailingSlash: `always`
});