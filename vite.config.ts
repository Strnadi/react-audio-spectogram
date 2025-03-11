import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import wasm from "vite-plugin-wasm";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "SpectrogramPlayer",
      fileName: (format) => `react-audio-spectrogram-player.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'ReactJsxRuntime'
        },
      },
    },
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin(), wasm()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  optimizeDeps: {
    exclude: ["rust-melspec-wasm"],
  },
});
