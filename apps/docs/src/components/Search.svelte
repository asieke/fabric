<script lang="ts">
	import { searchShowing } from '$lib/stores';
	import { clickOutside } from '$lib/dom';
	import type { Section } from '$lib/types';
	import { onMount, tick } from 'svelte';
	import { Search } from 'lucide-svelte';
	import { subtract } from 'exact-search';
	// import MiniSearch from 'minisearch';

	let input: HTMLInputElement;
	export let sections: Section[];

	// let miniSearch = new MiniSearch({
	// 	fields: ['title', 'content'], // fields to index for full-text search
	// 	storeFields: ['id', 'title', 'slug', 'sectionId', 'content'], // fields to return with search results
	// 	searchOptions: {
	// 		boost: { title: 2 },
	// 		prefix: true,
	// 		fuzzy: 0
	// 	}
	// });

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// import { Index } from 'flexsearch';
	// const index = new Index('score');

	const getResults = (query: string) => {
		return subtract(1, 3);
	};

	const handleClickOutside = () => {
		searchShowing.set(false);
	};

	$: {
		if ($searchShowing && input) {
			console.log('time to focus');

			input.focus();
		}
	}

	onMount(() => {
		//add an event listener to the whole window for a command-k keyboard event
		window.addEventListener('keydown', (e) => {
			if (e.metaKey && e.key === 'k') {
				searchShowing.update((v) => !v);
			}
		});
		// miniSearch.addAll(sections);
	});

	const search = () => {
		if (input) {
			// const results = miniSearch.search(query);
			const results = getResults(input.value);
			console.log(results);
		}
	};
</script>

{#if $searchShowing}
	<div class="absolute w-full h-full bg-black/50 z-50 backdrop-blur-sm">
		<div
			use:clickOutside={handleClickOutside}
			class="border border-slate-700 flex flex-row items-center fixed z-50 top-16 w-[40%] left-[30%] p-3 px-3 bg-white dark:bg-zinc-900 shadow-lg rounded-md"
		>
			<Search class="text-slate-500 h-4 w-4 mr-2" />
			<input
				bind:this={input}
				on:keyup={search}
				type="text"
				class="border-0 outline-none ring-0 w-full bg-white dark:bg-zinc-900 text-black dark:text-white text-sm"
				placeholder="Find Something"
			/>
		</div>
	</div>
{/if}
