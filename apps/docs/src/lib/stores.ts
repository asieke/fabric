import { writable } from 'svelte/store';

export const sidebarShowing = writable(false);

export const visibleSections = writable<string[]>([]);
