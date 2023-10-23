//mdsvex.config.js
import remarkHtml from 'remark-html';
import sectionize from 'remark-sectionize';

const config = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkHtml, sectionize]
};

export default config;
