/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    reporters: ["json",'default'],
    outputFile: './test-output.json',
    coverage: {
        provider: 'v8' // or 'istanbul'
         ,
        reporter: ['text', 'json', 'html'],
      },
  },
});
