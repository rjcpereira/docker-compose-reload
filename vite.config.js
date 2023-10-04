import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		/* host: "0.0.0.0",
		hmr: {
		  clientPort: ENV_VARIABLES.OUTER_PORT_FRONTEND,
		}, */
		strictPort: true,
		port: 4000
	},
	plugins: [
		sveltekit()
	]
})