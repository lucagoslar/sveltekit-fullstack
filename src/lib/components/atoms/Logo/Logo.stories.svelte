<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Logo from './Logo.svelte';
</script>

<Meta title="Atoms/Logo" component={Logo} />

<Template let:args>
	<Logo {...args} />
</Template>

<Story name="Default" />
