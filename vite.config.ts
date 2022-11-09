/// <reference types="histoire" />

import { HstSvelte } from '@histoire/plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from 'vite-plugin-svelte-svg';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';
import { alias } from './sass-alias.js';
import { fileURLToPath, URL } from 'url';
import path from 'path';

const css = {
	preprocessorOptions: {
		scss: {
			importer: [alias.resolve.bind(alias)]
		}
	}
};

const config: UserConfig = {
	css,
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
	histoire: {
		plugins: [HstSvelte()],
		setupFile: './src/histoire.setup.ts',
		vite: {
			css,
			resolve: {
				alias: {
					$i18n: fileURLToPath(new URL(path.join('src', 'i18n'), import.meta.url)),
					$scss: fileURLToPath(new URL(path.join('src', 'lib', 'global', 'scss'), import.meta.url))
				}
			}
		}
	}
};

export default config;
