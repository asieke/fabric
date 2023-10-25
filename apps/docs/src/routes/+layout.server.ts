import { getSearchIndex } from '$lib/search';

export const load = async () => {
	const sections = await getSearchIndex();

	return {
		sections
	};
};
