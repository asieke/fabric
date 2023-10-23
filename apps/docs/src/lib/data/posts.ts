import { browser } from '$app/environment';
import type { Metadata } from '$lib/types';

if (browser) {
	throw new Error(`posts can only be imported server-side`);
}

type Post = {
	metadata: {
		title: string;
		headings: string[];
		date: string;
		order: number;
	};
	default: {
		render: () => {
			html: string;
		};
	};
};

export const posts = Object.entries(import.meta.glob('/src/markdown/**/*.md', { eager: true }))
	.map(([filepath, post]): Metadata => {
		const typedPost = post as Post; // Type assertion
		const filename = filepath.split('/')?.pop()?.replace(/\.md$/, '');
		return {
			//slug should only be the filename, not the full path
			slug: filename || '',
			...typedPost.metadata
		};
	})
	.sort((a, b) => a.order - b.order);

export const getPost = async (slug: string) => {
	try {
		const data = await import(`../../markdown/${slug}.md`);
		const html = data.default.render().html;
		const metadata = posts.find((post) => post.slug === slug);

		// in the rendered html, replace all <h2> with the following pattern:
		// <h2>Title</h2> -> <h2 id="Title">Title</h2>

		return {
			slug: slug,
			html: html,
			metadata: metadata
		};
	} catch (e) {
		return {
			slug: slug,
			html: '<h1>404 - Not Found</h1>',
			metadata: null
		};
	}
};

//			html: typedPost.default.render().html
