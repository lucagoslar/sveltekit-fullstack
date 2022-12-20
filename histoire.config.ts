import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [HstSvelte()],
	setupFile: path.join('src', 'histoire.setup.ts'),
	vite: {
		server: {
			port: 5173
		}
	}
});
