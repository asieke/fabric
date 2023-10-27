<script lang="ts">
	import type { Result } from 'exact-search';

	export let results: Result[] | null = null;
	export let query: string;
	export let highlight: number | null = null;
	export let navigateToResult: (i: number) => void;
	export let updateHighlight: (i: number) => void;

	const formatSlug = (slug: string) => {
		return slug
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	const formatString = (str: string) => {
		return str.replace(
			new RegExp(`(${query})`, 'gi'),
			'<span style="color: rgb(16 185 129)">$1</span>'
		);
	};
</script>

{#if results}
	<div class="divide-y text-xs divide-slate-200 dark:divide-slate-700">
		{#each results as { match, title, slug, sectionId, content }, i}
			<button
				on:click={() => navigateToResult(i)}
				on:mouseenter={() => updateHighlight(i)}
				class="w-full text-left px-4 p-3 dark:bg-zinc-900 text-black dark:text-white {i ===
				highlight
					? 'bg-zinc-100 dark:bg-zinc-950'
					: ''} last:rounded-b-md"
			>
				<!-- remove the hyphens in slug and convert to proper case -->
				<span>{@html formatSlug(slug)} / </span>

				{#if match && match.title}
					<!-- query='hello' match.title='hello world' => regex output=<span class='u'>hello</span> world -->
					{@html formatString(match.title)}
				{:else}
					<span>{title}</span>
				{/if}
				{#if match && match.content}
					<div class="text-sm text-gray-600 dark:text-gray-400">
						{@html formatString(match.content)}
					</div>
				{/if}
			</button>
		{/each}

		{#if results.length === 0}
			<div class="px-4 p-3 text-gray-600 dark:text-gray-400 dark:bg-zinc-900">No Results</div>
		{/if}
	</div>
{/if}
