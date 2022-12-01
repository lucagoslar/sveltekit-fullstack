import { setLocale } from '$i18n/i18n-svelte';
import { loadLocale } from '$i18n/i18n-util.sync';
import '$scss/main.scss';
import 'normalize.css';

loadLocale('de');
setLocale('de');
