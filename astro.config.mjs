// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://kubajastrz.com",

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Geist Mono",
			cssVariable: "--font-geist-mono",
			weights: ["400 700"],
			unicodeRange: [
				"U+0000-00FF", // Basic Latin + Latin-1 Supplement (English)
				"U+0100-017F", // Latin Extended-A (Polish diacritics)
				"U+2000-206F", // General Punctuation (em dash, etc.)
			],
			subsets: ["latin", "latin-ext"],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
