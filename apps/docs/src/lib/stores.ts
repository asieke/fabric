import { writable } from 'svelte/store';

export const sidebarShowing = writable(false);
export const visibleIds = writable<string[]>([]);
export const searchShowing = writable(false);
