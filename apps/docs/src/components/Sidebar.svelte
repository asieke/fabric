<script lang="ts">
	import { tick } from 'svelte';
	import { sections, visibleIds } from '$lib/stores';
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname.substring(1);

	$: console.log($page.data);

	let links = [
		{
			title: 'Getting Started',
			slug: 'getting-started'
		},
		{
			title: 'SDK',
			slug: 'sdk'
		},
		{
			title: 'Weather',
			slug: 'weather'
		}
	];

	const scrollToSection = (section: string) => {
		const id = section.toLowerCase().replace(/ /g, '-');
		const el = document.getElementById(id);
		el?.scrollIntoView({ block: 'start' });
	};
</script>

<nav class=" h-full p-8 prose dark:prose-invert">
	<h3>Guides</h3>
	<ul class="border-l-[2px] border-zinc-100 dark:border-zinc-800">
		{#each links as { title, slug }}
			<li class="relative">
				<a href="/{slug}">{title}</a>
				{#if slug === currentPage}
					<div class="absolute top-1 -left-[6px] bg-emerald-500 w-[2px] h-5" />
					<ul>
						{#each $sections as { title, id }}
							<li
								class="{$visibleIds.includes(id) ? 'visible' : ''} {$visibleIds[0] === id
									? 'first'
									: ''} {$visibleIds[$visibleIds.length - 1] === id ? 'last' : ''} my-0"
							>
								<button on:click={() => scrollToSection(id)}>{title}</button>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	ul {
		@apply list-none pl-1 my-0 space-y-2;
	}
	li > ul {
		@apply my-0 py-0 pl-2 space-y-0;
	}
	li {
		@apply my-0 py-0;
	}
	li > ul > li {
		@apply my-0 py-0;
	}

	.visible {
		@apply bg-slate-100 dark:bg-zinc-900;
	}

	.first {
		@apply rounded-t-md;
	}

	.last {
		@apply rounded-b-md;
	}
</style>
