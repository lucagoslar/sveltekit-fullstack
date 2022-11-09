import { isLocale } from '$i18n/i18n-util';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from '$lib/trpc/hook';
import { router } from '$lib/trpc/server';

export const handle: Handle = async ({ event, resolve }) => {
	// Extract language
	let [, lang] = event.url.pathname.split('/');

	if (isLocale(lang)) {
		// Set lang attribute
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', lang)
		});
	}

	const response = await createTRPCHandle({
		url: '/trpc',
		router,
		createContext: async () => ({}),
		event,
		resolve
	});

	return response;
};
