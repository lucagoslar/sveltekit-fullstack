<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';

	import SVG from './Logo.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<SVG />
</Hst.Story>
