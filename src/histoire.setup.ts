// i18n

import { setLocale } from '$i18n/i18n-svelte';
import { baseLocale } from '$i18n/i18n-util';
import { loadLocale } from '$i18n/i18n-util.sync';

loadLocale(baseLocale);
setLocale(baseLocale);

// global styles

import 'normalize.css';
import '$styles/main.scss';
import '$styles/histoire.scss';
