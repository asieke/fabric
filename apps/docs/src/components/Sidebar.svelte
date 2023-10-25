<script lang="ts">
	import { tick } from 'svelte';
	import { visibleIds } from '$lib/stores';
	import { page } from '$app/stores';
	import type { Section } from '$lib/types';

	export let sections: Section[];

	//get the current page url
	$: currentPage = $page.route.id?.split('/').pop();
	$: currentSections = sections.filter((section) => section.slug === currentPage);

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
		console.log(section);
		const id = section.toLowerCase().replace(/ /g, '-');
		const el = document.getElementById(id);
		el?.scrollIntoView({ block: 'start' });
	};
</script>

{#if sections}
	<nav class=" h-full p-8 prose dark:prose-invert">
		<h3>Guides</h3>
		<ul class="border-l-[2px] border-zinc-100 dark:border-zinc-800">
			{#each links as { title, slug }}
				<li class="relative">
					<a href="/{slug}">{title}</a>
					{#if slug === currentPage}
						<div class="absolute top-1 -left-[6px] bg-emerald-500 w-[2px] h-5" />
						<ul>
							{#each currentSections as { title, sectionId }}
								<li
									class="{$visibleIds.includes(sectionId) ? 'visible' : ''} {$visibleIds[0] ===
									sectionId
										? 'first'
										: ''} {$visibleIds[$visibleIds.length - 1] === sectionId ? 'last' : ''} my-0"
								>
									<button on:click={() => scrollToSection(sectionId)}>{title}</button>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}

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
