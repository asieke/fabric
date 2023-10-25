import { browser } from '$app/environment';
import { visibleIds } from '$lib/stores';

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

export function clickOutside(node: HTMLElement, handler: () => void): { destroy: () => void } {
	const onClick = (event: MouseEvent) =>
		node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented && handler();

	document.addEventListener('click', onClick, true);

	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
}
