import { SassAlias } from 'svelte-preprocess-sass-alias-import';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

export const alias = new SassAlias({
	$styles: ['src', 'helpers', 'styles']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		sass: {
			importer: [alias.resolve.bind(alias)]
		},
		scss: {
			importer: [alias.resolve.bind(alias)]
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$assets: path.join('src', 'assets'),
			$scripts: path.join('src', 'helpers', 'scripts'),
			$styles: path.join('src', 'helpers', 'styles'),
			$i18n: path.join('src', 'i18n'),
			$lib: path.join('src', 'lib'),
			$atoms: path.join('src', 'lib', 'components', 'atoms'),
			$molecules: path.join('src', 'lib', 'components', 'molecules'),
			$organisms: path.join('src', 'lib', 'components', 'organisms'),
			$components: path.join('src', 'lib', 'components')
		}
	}
};

export default config;
