import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { alias } from './sass-alias.js';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			importer: [alias.resolve.bind(alias)]
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$i18n: path.join('src', 'i18n'),
			$scss: path.join('src', 'lib', 'global', 'scss')
		}
	}
};

export default config;
