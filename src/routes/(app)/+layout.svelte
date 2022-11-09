<script lang="ts">
	import type { LayoutData } from './$types';

	import { setLocale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { loadLocale } from '$i18n/i18n-util.sync';

	import 'normalize.css';

	export let data: LayoutData;

	loadLocale(data.language as Locales);
	setLocale(data.language as Locales);
</script>

<slot />
