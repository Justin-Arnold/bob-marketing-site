/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#00dbff",
                    "secondary": "#88C0D0",
                    "accent": "#8FBCBB",
                    "neutral": "#ECEFF4",
                    "base-100": "#3B4252",
                    "info": "#81A1C1",
                    "success": "#A3BE8C",
                    "warning": "#EBCB8B",
                    "error": "#BF616A",

                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs
                },
            },
        ],
    },
	plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
        addDynamicIconSelectors(),
    ],
}
