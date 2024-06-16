import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    minify: "terser",
    sourcemap: true,
    target: "es2015",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        keep_fargs: false,
        pure_funcs: ["console.log"],
      },
      mangle: {
        keep_classnames: false,
        keep_fnames: false,
        safari10: true,
      },
      module: true,
    },
  },
});
