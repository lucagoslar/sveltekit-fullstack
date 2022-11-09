<script lang="ts">
	import type { Hst as H } from '@histoire/plugin-svelte';
	import { logEvent } from 'histoire/client';
	import Button from './Button.svelte';

	export let Hst: H;
</script>

<Hst.Story title="Button" icon="carbon:car" iconColor="gray">
	<Hst.Variant title="default">
		<Button on:click={(event) => logEvent('click', event)}>🚗</Button>
	</Hst.Variant>
	<Hst.Variant title="Fast">
		<Button on:click={(event) => logEvent('click', event)}>🏎️</Button>
	</Hst.Variant>
	<Hst.Variant title="Slow">
		<Button on:click={(event) => logEvent('click', event)}>🚜</Button>
	</Hst.Variant>
</Hst.Story>
