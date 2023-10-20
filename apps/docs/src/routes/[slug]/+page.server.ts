import { posts, getPost } from '$lib/data/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: { slug: string } }) {
	// html: typedPost.default.render().html
	const { slug } = params;
	const data = await getPost(slug);

	return {
		...data,
		posts
	};
}
