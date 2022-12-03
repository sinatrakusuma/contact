
import 'regenerator-runtime';
import CacheCherioHelper from './utils/helper/cachecherio-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheCherioHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheCherioHelper.deleteCherioCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheCherioHelper.validateCherioCache(event.request));
});
