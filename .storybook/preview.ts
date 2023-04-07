import type { Preview } from '@storybook/svelte';
import Wrapper from './Wrapper.svelte';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	// @ts-ignore
	decorators: [() => Wrapper]
};

export default preview;
