<script lang="ts">
	import { searchShowing } from '$lib/stores';
	import { clickOutside } from '$lib/dom';
	import type { Section } from '$lib/types';
	import { onMount } from 'svelte';
	import { Search } from 'lucide-svelte';
	import { ExactSearch, type Result } from 'exact-search';
	import { SearchResults } from '$components';
	import { goto } from '$app/navigation';

	export let sections: Section[];

	let input: HTMLInputElement;
	let index: ExactSearch;
	let results: Result[] | null = null;
	let query: string = '';
	let highlight = 0;

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
		index = new ExactSearch({
			data: sections,
			indexFields: ['title', 'content'],
			resultFields: ['title', 'slug', 'sectionId']
		});
	});

	const updateHighlight = (i: number) => {
		highlight = i;
	};

	const navigateToResult = (i: number) => {
		if (!results || !results[i]) return;
		const result = results[i];
		highlight = 0;
		results = null;
		query = '';
		//navigate to the result
		goto(`${result.slug}#${result.sectionId}`);
		searchShowing.set(false);
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		//if its the arrow down key and highlight < results.length - 1
		if (results && e.key === 'ArrowDown') {
			if (highlight < results.length - 1) {
				highlight++;
			} else {
				highlight = 0;
			}
		}

		//if its the arrow up key and highlight > 0
		if (results && e.key === 'ArrowUp') {
			if (highlight > 0) {
				highlight--;
			} else {
				highlight = results.length - 1;
			}
		}

		//if the enter key is pressed
		if (results && e.key === 'Enter') {
			navigateToResult(highlight);
		}

		if (!input || query.length < 2) {
			results = null;
			return;
		}
		if (input && query.length >= 2) {
			// const results = miniSearch.search(query);
			results = index.search(query, 5);
			console.log('Search Results', query, results);
		}
	};
</script>

{#if $searchShowing}
	<div class="absolute w-full h-full bg-black/50 z-50 backdrop-blur-sm">
		<div
			use:clickOutside={handleClickOutside}
			class="outline-[1px] outline-slate-500 dark:border-slate-700 fixed z-50 top-16 w-[40%] left-[30%] shadow-lg rounded-md"
		>
			<div
				class="flex flex-row items-center p-3 px-3 bg-zinc-100 dark:bg-zinc-900 {results
					? 'rounded-t-md border-b dark:border-slate-700'
					: 'rounded-md'}"
			>
				<Search class="text-slate-500 h-4 w-4 mr-2" />
				<input
					bind:this={input}
					on:keyup={(e) => handleKeyPress(e)}
					bind:value={query}
					type="text"
					class="border-0 outline-none ring-0 w-full bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white text-sm"
					placeholder="Find Something"
				/>
			</div>
			<div class="bg-white rounded-b-md">
				<SearchResults {results} {query} {highlight} {navigateToResult} {updateHighlight} />
			</div>
		</div>
	</div>
{/if}
