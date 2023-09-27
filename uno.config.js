// uno.config.ts
import { defineConfig, presetUno, presetIcons } from "unocss";
import { presetWebFonts } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	content: {
		filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
	},
	presets: [
		presetUno({
			dark: "class",
		}),
		presetIcons(),
		presetWebFonts({
			fonts: {
				lobster: "Lobster",
				FishCard: "Monoton",
				DuckCard: "Berkshire Swash",
				SvelteCard: "Overpass",
				number: "B612 Mono",
			},
		}),
		presetForms(),
	],
	safelist: [
		"font-FishCard font-DuckCard font-SvelteCard left-0 animate-card0 animate-card1 animate-card2 animate-card3 animate-cardactive0 animate-cardactive1 animate-cardactive2 animate-cardactive3",
		...Array.from({ length: 300 }, (_, i) => `top-[${i}px]`),
		...Array.from({ length: 32 }, (_, i) => `zr-${i}`),
	],
	shortcuts: [
		{
			"nav-button":
				"rounded-lg p-4 outline-1 outline-solid outline-black hover:bg-blue-100 transition-all text-2xl",
		},
		[
			/^btn-(.*)$/,
			([, c]) =>
				`bg-${c}-400 text-${c}-800 text-xl p-4 rounded-lg transition-all hover:bg-${c}-300`,
		],
	],
	theme: {
		animation: {
			keyframes: {
				card0: "{from{transform:translateY(-400px)}to{transform:translateY(0px)}}",
				card1: "{from{transform:translateY(-460px)}to{transform:translateY(0px)}}",
				card2: "{from{transform:translateY(-520px)}to{transform:translateY(0px)}}",
        card3: "{from{transform:translateY(-580px)}to{transform:translateY(0px)}}",
        cardactive0: "{from{transform:translateY(400px)}to{transform:translateY(0px)}}",
        cardactive1: "{from{transform:translateY(460px)}to{transform:translateY(0px)}}",
        cardactive2: "{from{transform:translateY(520px)}to{transform:translateY(0px)}}",
        cardactive3: "{from{transform:translateY(580px)}to{transform:translateY(0px)}}",
			},
			durations: {
				// too buggy t_t
				card0: "1s",
				card1: "1s",
				card2: "1s",
				card3: "1s",
				cardactive0: "1s",
				cardactive1: "1s",
				cardactive2: "1s",
				cardactive3: "1s",
			},
			timingFns: {
				card0: "ease-out",
				card1: "ease-out",
				card2: "ease-out",
				card3: "ease-out",
				cardactive0: "ease-out",
				cardactive1: "ease-out",
				cardactive2: "ease-out",
				cardactive3: "ease-out",
			},
		},
	},
});
