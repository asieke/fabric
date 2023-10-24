import { search } from '$lib/search';

export async function GET({ request }: { request: Request }) {
	// get the query string from the URL

	const query = new URL(request.url).searchParams.get('query') || '';

	if (!query || query.length < 3) {
		return new Response(
			JSON.stringify({
				query: query,
				bones: 'money',
				results: [],
				documents: []
			})
		);
	}

	const { results, documents } = await search(query);

	return new Response(
		JSON.stringify({
			query: query,
			bones: 'money',
			results: results,
			documents: documents
		})
	);
}
