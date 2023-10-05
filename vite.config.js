import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

import { port } from './src/config.js';

export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port
	},
	preview: {
		port
	},
	plugins: [
		sveltekit()
	]
})