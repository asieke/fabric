<script lang="ts">
	import { page } from '$app/stores';
	import type { Metadata } from '$lib/types';
	import { visibleSections } from '$lib/stores';

	const posts = $page.data.posts as Metadata[];

	//get the page slug
	$: pageSlug = $page.params.slug;

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		el?.scrollIntoView({ block: 'start' });
	};
</script>

{#if posts}
	<nav class=" h-full p-8 prose dark:prose-invert">
		<h3>Guides</h3>

		<ul class="border-l-[2px] border-zinc-100 dark:border-zinc-800">
			{#each posts as { title, headings, slug }}
				<li class="relative">
					<a href="/{slug}">{title}</a>
					{#if slug === pageSlug}
						<div class="absolute top-1 -left-[6px] bg-emerald-500 w-[2px] h-5" />
						<ul>
							{#each headings as text}
								<li
									class="{$visibleSections.includes(text) ? 'visible' : ''} {$visibleSections[0] ===
									text
										? 'first'
										: ''} {$visibleSections[$visibleSections.length - 1] === text
										? 'last'
										: ''} my-0"
								>
									<button on:click={() => scrollToSection(text)}>{text}</button>
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
