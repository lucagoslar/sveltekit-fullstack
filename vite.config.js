import { sveltekit } from '@sveltejs/kit/vite';
import svg from 'vite-plugin-svelte-svg';
import { imagetools } from 'vite-imagetools';

import { alias } from './svelte.config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svg({
			svgoConfig: {
				plugins: [
					{ name: 'removeXMLProcInst', active: true },
					{ name: 'removeComments', active: true },
					{ name: 'removeDoctype', active: true },
					{ name: 'minifyStyles', active: true }
				]
			}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true // Set false to accept '.svg' without the '?component'
		}),
		imagetools()
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
