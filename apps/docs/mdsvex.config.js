//mdsvex.config.js
import remarkHtml from 'remark-html';

const config = {
	layout: './src/markdown/Layout.svelte',
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkHtml]
};

export default config;
