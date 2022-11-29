<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import client from '$lib/global/trpc';
	import { onMount } from 'svelte';

	onMount(() => {
		client()
			.userById.query('1')
			.then((res) => {
				console.log(res);
			});
	});
</script>

<MetaTags title="Example Title" description="Example Description." />

{$LL.HI({ name: 'NULL' })}
