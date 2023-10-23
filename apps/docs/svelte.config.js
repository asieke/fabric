import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex
import mdsvexConfig from './mdsvex.config.js'; // 👈import our mdsvex config

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions], // 👈 enable mdsvex
	kit: {
		adapter: adapter(),
		alias: {
			$styles: 'src/styles',
			$components: 'src/components',
			$lib: 'src/lib',
			$pages: 'src/pages',
			$markdown: 'src/markdown'
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)]
};
export default config;
