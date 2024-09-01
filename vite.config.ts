import { Plugin, defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react({}), dts({ outDir: "build", entryRoot: "src" })] as Plugin[],
  build: {
    outDir: "build",
    lib: {
      entry: [resolve(__dirname, "src/index.ts"), ...globSync("src/*.tsx")],
      name: "icon",
    },
  },
});
