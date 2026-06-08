import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// 💡 This checks if the build is running on GitHub Actions or Vercel
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  integrations: [react()],
  site: "https://co230532-a11y.github.io",

  // If it's GitHub, use the subfolder. If it's Vercel, leave it perfectly empty!
  base: isGitHubPages ? "/internship-portfolio" : "",
});
