import { tick } from 'svelte';
import { browser } from '$app/environment';
import { visibleIds, sections } from '$lib/stores';

export const updateSectionIds = async () => {
	tick().then(() => {
		if (browser) {
			const h2s = document.querySelectorAll('h2');
			sections.set([]);
			//for each h2, find the parent section immediately above the h2 and add an ID to it
			h2s.forEach((h2) => {
				sections.update((sections) => [
					...sections,
					{ title: h2.innerText, id: h2.innerText.toLowerCase().replace(/ /g, '-') }
				]);
				const section = h2.closest('section');
				if (section) {
					section.id = h2.innerText.toLowerCase().replace(/ /g, '-');
				}
			});
		}
	});
};

export const getVisibleSections = () => {
	//return an array of strings with the ids of the sections that are currently visible
	if (browser) {
		const sections = document.querySelectorAll('section');
		const visible = [];
		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const rect = section.getBoundingClientRect();

			if (rect.bottom <= 50 || rect.top >= window.innerHeight - 50 || section.id === '') {
				continue;
			}
			visible.push(section.id);
		}
		visibleIds.set(visible);
	}
};
