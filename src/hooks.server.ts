import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import type { ValidRoute } from 'trpc-sveltekit/dist/ValidRoute';

import { PUBLIC_TRPC_SLUG } from '$env/static/public';

import { createContext } from '$lib/server/trpc/createContext';
import { appRouter } from '$lib/server/trpc/_app';
import { isLocale } from '$i18n/i18n-util';
import { prisma } from '$lib/server/prisma';

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
	url: PUBLIC_TRPC_SLUG as ValidRoute<typeof PUBLIC_TRPC_SLUG>,
	createContext,
	router: appRouter
});

export const handle: Handle = sequence(language, trpc);

async function seed() {
	if (!((await prisma.user.count()) > 0)) {
		await prisma.user.create({ data: { email: 'mail@example.com' } });
	}
}

seed();
