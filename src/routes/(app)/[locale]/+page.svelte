<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';

	import type { PageData } from './$types';
	import Image from '$assets/bigben.avif?enhanced';

	import { client } from '$scripts/trpc';

	export let data: PageData;

	onMount(async () => {
		console.log(await client().substraction.query({ minuend: 1, subtrahend: 1 }));
		console.log(await client().pong.query());
	});
</script>

<MetaTags title="sveltekit-fullstack" />

<p>
	{$LL.HI({ name: 'NULL' })}
</p>

<p>
	{data.userCount} user(-s)
</p>

<enhanced:img src={Image} alt="Big Ben" />
