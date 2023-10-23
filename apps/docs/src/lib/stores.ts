import { writable } from 'svelte/store';

export const sidebarShowing = writable(false);

type Section = {
	id: string;
	title: string;
};

export const visibleIds = writable<string[]>([]);
export const sections = writable<Section[]>([]);
