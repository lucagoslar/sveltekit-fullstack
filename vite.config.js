import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { enhancedImages } from '@sveltejs/enhanced-img';

import { alias } from './svelte.config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svg(),
		enhancedImages()
	],
	css: {
		preprocessorOptions: {
			sass: {
				importer: [alias.resolve.bind(alias)]
			},
			scss: {
				importer: [alias.resolve.bind(alias)]
			}
		}
	}
};

export default config;
