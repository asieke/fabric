import fs from 'fs';
import path from 'path';
import { compile } from 'mdsvex';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import remarkHtml from 'remark-html';
import sectionize from 'remark-sectionize';
import { convert } from 'html-to-text';
import type { Section } from './types';

const config = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkHtml, sectionize]
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getSearchIndex = async () => {
	console.log('FILENAME: ', __filename);
	console.log('DIRNAME', __dirname);

	let id = 0;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore

	const sections: Section[] = [];

	const folders = fs.readdirSync(path.join(__dirname, '../routes/(docs)/'));

	for (let i = 0; i < folders.length; i++) {
		const file = fs.readFileSync(
			path.join(__dirname, '../routes/(docs)/' + folders[i] + '/+page.svx'),
			'utf-8'
		);

		const slug = folders[i];

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const code = (await compile(file, config)).code as string;
		const sectionRegex = /<section id="([^"]+)">([\s\S]*?)<\/section>/g;
		let match;
		while ((match = sectionRegex.exec(code)) !== null) {
			const sectionId = match[1];
			const contentWithTags = match[2];

			// Find the section title (h2 tag)
			const h2Match = contentWithTags.match(/<h2>(.*?)<\/h2>/);
			const title = h2Match ? h2Match[1] : '';

			const content = convert(contentWithTags);

			sections.push({ id, slug, sectionId, title, content });
			id++;
		}
	}

	return sections;
};
