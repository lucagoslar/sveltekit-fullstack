import type { LayoutServerLoad } from './$types';

import { redirect } from '@sveltejs/kit';
import parser from 'accept-language-parser';

import { baseLocale, locales } from '$i18n/i18n-util';
import type { Locales } from '$i18n/i18n-types';

export const load: LayoutServerLoad = async (event) => {
	const browserLanguage = parser.pick(locales, event.request.headers.get('accept-language') || '');
	const locale = event.params.locale as Locales;

	if (!locale || !locales.includes(locale)) {
		let pathname = event.url.pathname.split('/').filter(Boolean);
		pathname.unshift((browserLanguage as string) || baseLocale);

		redirect(308, pathname.join('/'));
	}

	return {
		locale
	};
};
