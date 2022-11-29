import type { LayoutServerLoad } from './$types';
import { baseLocale, locales } from '$i18n/i18n-util';
import { redirect } from '@sveltejs/kit';
import parser from 'accept-language-parser';
import client from '$lib/global/trpc';

export const load: LayoutServerLoad = async (request) => {
	const browserLanguage = parser.pick(
		locales,
		request.request.headers.get('accept-language') || ''
	);

	let path = request.url.pathname.split('/').filter(Boolean);

	if (path.length == 0 || (path.length > 0 && !(locales as [string]).includes(path[0]))) {
		path.unshift(browserLanguage || baseLocale);
		throw redirect(308, path.join('/'));
	}

	const user = await client(request.fetch).userById.query('1');

	console.log(user);

	return {
		language: path[0]
	};
};
