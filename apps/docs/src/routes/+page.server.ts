import { posts } from '$lib/data/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// html: typedPost.default.render().html

	return {
		posts
	};
}
