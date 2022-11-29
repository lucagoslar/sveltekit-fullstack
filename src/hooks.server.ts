import { sequence } from '@sveltejs/kit/hooks';
import { isLocale } from '$i18n/i18n-util';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { router } from '$lib/trpc/server';

const language: Handle = async ({ event, resolve }) => {
	let [, lang] = event.url.pathname.split('/');

	if (isLocale(lang)) {
		// Set lang attribute
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', lang)
		});
	}

	return await resolve(event);
};

const trpc: Handle = createTRPCHandle({
	url: '/trpc',
	router,
	createContext: async () => ({})
});

export const handle: Handle = sequence(language, trpc);
