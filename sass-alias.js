import { SassAlias } from 'svelte-preprocess-sass-alias-import';
import 'path';

export const alias = new SassAlias({
	$scss: ['src', 'lib', 'global', 'scss']
});
