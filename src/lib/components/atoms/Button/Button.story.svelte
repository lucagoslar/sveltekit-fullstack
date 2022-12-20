<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';

	import { LL } from '$i18n/i18n-svelte';
	import Button from './Button.svelte';

	export let Hst: Hst;

	let timesClicked = 0;

	function handleClick() {
		timesClicked++;
	}
</script>

<Hst.Story>
	<div class="spaced">
		<Button on:click={handleClick}>{$LL.story.button({ times: timesClicked })}</Button>
	</div>
</Hst.Story>
