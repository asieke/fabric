<script lang="ts">
	import { tick } from 'svelte';
	import { allSections, visibleSections } from '$lib/stores';
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname.substring(1);

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
	<h3>Guides {currentPage}</h3>
	<ul class="border-l-[2px] border-zinc-100 dark:border-zinc-800">
		{#each links as { title, slug }}
			<li class="relative">
				<a href="/{slug}">{title}</a>
				{#if slug === currentPage}
					<div class="absolute top-1 -left-[6px] bg-emerald-500 w-[2px] h-5" />
					<ul>
						{#each $allSections as section}
							<li
								class="{$visibleSections.includes(section.toLowerCase().replace(/ /g, '-'))
									? 'visible'
									: ''} {$visibleSections[0] === section ? 'first' : ''} {$visibleSections[
									$visibleSections.length - 1
								] === section
									? 'last'
									: ''} my-0"
							>
								<button on:click={() => scrollToSection(section)}>{section}</button>
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
