<script lang="ts">
	import { goto } from '$app/navigation';
	import { visibleIds, sidebarShowing } from '$lib/stores';
	import { page } from '$app/stores';
	import type { Section } from '$lib/types';

	export let sections: Section[];

	//get the current page url
	$: currentPage = $page.route.id?.split('/').pop();
	$: currentSections = sections.filter((section) => section.slug === currentPage);

	const contents = [
		{
			name: 'Getting Started',
			links: [
				{ title: 'Quick Start', slug: 'quick-start' },
				{ title: 'SDK', slug: 'sdk' },
				{ title: 'Weather', slug: 'weather' }
			]
		},
		{
			name: 'API',
			links: [
				{ title: 'item', slug: 'api-item' },
				{ title: 'query', slug: 'api-query' },
				{ title: 'search', slug: 'api-search' }
			]
		}
	];

	const goToSection = (section: string = '') => {
		console.log(page, section);
		const el = document.getElementById(section);
		el?.scrollIntoView({ block: 'start' });
		if ($sidebarShowing) {
			sidebarShowing.set(false);
		}
	};

	const goToPage = (slug: string = '') => {
		goto(slug);
		if ($sidebarShowing) {
			sidebarShowing.set(false);
		}
	};
</script>

{#if sections}
	<nav class="h-full prose dark:prose-invert px-8">
		<button
			class="my-0 p-0 lg:flex flex-row items-center h-16 hidden text-black"
			on:click={() => goto('/')}
		>
			<img src="images/logo.png" alt="logo" class="my-0 h-5 w-5 rounded-md shadow-sm" />
			<div class="text-xl font-bold tracking-tighter pl-2">Fabric SDK</div>
		</button>
		{#each contents as { name, links }}
			<h3>{name}</h3>

			<ul class=" dark:border-zinc-800 relative">
				<div class="absolute w-[1px] -left-[1px] h-full bg-slate-200 dark:bg-slate-700 z-40" />
				{#each links as { title, slug }}
					<li class="relative">
						<button
							class="my-0 text-emerald-500 font-bold hover:opacity-80"
							on:click={() => goToPage(slug)}>{title}</button
						>

						{#if slug === currentPage}
							<div class="absolute z-50 top-1 -left-[5px] bg-emerald-500 w-[1px] h-5" />
							<ul>
								{#each currentSections as { title, sectionId }}
									<li
										class="{$visibleIds.includes(sectionId) ? 'visible' : ''} {$visibleIds[0] ===
										sectionId
											? 'first'
											: ''} {$visibleIds[$visibleIds.length - 1] === sectionId ? 'last' : ''} my-0"
									>
										<button on:click={() => goToSection(sectionId)}>{title}</button>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		{/each}
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
		@apply bg-zinc-100 pl-[38px] -ml-8 dark:bg-zinc-800/50;
	}

	.first {
		@apply rounded-t-md;
	}

	.last {
		@apply rounded-b-md;
	}
</style>
