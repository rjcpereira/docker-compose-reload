import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const port = process.env.PORT || 3000;

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