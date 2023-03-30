import react from "@vitejs/plugin-react";
import { telefunc } from "telefunc/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), telefunc()],
  test: {
    environment: "jsdom",
    include: ["./components/**/*.+(spec|test).+(ts|tsx|js)"],
    setupFiles: [],
    globals: true,
  },
});
