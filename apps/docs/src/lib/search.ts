import fs from 'fs';
import path from 'path';
import { compile } from 'mdsvex';
import lunr from 'lunr';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let documents: {
	id: number;
	content: string;
	title: string;
	slug: string;
	sectionId: string;
}[] = [];

const readSVX = async () => {
	const folders = fs.readdirSync(path.join(__dirname, '../routes/(docs)/'));

	let index = 0;

	for (let i = 0; i < folders.length; i++) {
		const file = fs.readFileSync(
			path.join(__dirname, '../routes/(docs)/' + folders[i] + '/+page.svx'),
			'utf-8'
		);

		const content = '# ' + file.split('# ').slice(1).join('# ');
		const arr = content.split('\n');

		let temp = '';
		let title = '';

		for (let j = 0; j < arr.length; j++) {
			const line = arr[j];
			if (line.startsWith('## ') || j === arr.length - 1) {
				documents.push({
					id: index,
					title: title.length > 3 ? title.substring(3) : title,
					sectionId: (title.length > 3 ? title.substring(3) : title)
						.toLowerCase()
						.replace(/ /g, '-'),
					content: temp,
					slug: folders[i]
				});
				index++;
				temp = line + '\n';
				title = line;
			} else {
				temp += line + '\n';
			}
		}
	}

	const idx = lunr(function () {
		this.ref('id');
		this.field('content');
		this.field('title');

		documents.forEach((doc) => {
			this.add(doc);
		}, this);
	});

	return { idx, documents };
};

export async function search(query: string) {
	documents = [];
	const { idx, documents: docs } = await readSVX();
	const results = idx.search(query);

	return {
		documents: docs,
		results: results.map((result) => {
			const doc = documents[parseInt(result.ref)];
			return {
				ref: parseInt(result.ref),
				sectionId: doc.sectionId,
				title: doc.title,
				slug: doc.slug,
				score: result.score
			};
		})
	};
}
