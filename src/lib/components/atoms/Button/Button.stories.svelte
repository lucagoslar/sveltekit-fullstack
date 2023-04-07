<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Atoms/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={handleClick}>
		Clicked {count} times
	</Button>
</Template>

<Story name="Default" />
