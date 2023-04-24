import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

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

export const handle: Handle = sequence(language);

async function seed() {
	if (!((await prisma.user.count()) > 0)) {
		await prisma.user.create({ data: { email: 'mail@example.com' } });
	}
}

seed();
