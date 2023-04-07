<script lang="ts">
	import { locales } from '$i18n/i18n-util';
	import Layout from '../src/routes/(app)/+layout.svelte';

	let data = { locale: locales[0] };
</script>

<Layout {data}><slot /></Layout>
