import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://co230532-a11y.github.io",
  base: "/internship-portfolio",
});
