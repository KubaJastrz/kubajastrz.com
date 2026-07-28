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
			weights: ["300 700"],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
