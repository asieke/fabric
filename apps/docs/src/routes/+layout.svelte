<script lang="ts">
	import '$styles/app.css';
	import { Sidebar, Navbar, Background, Footer, Search } from '$components';
	import { sidebarShowing } from '$lib/stores';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getVisibleSections } from '$lib/dom';

	let main: HTMLDivElement;
	let currentPage: string;

	export let data;
	const { sections } = data;

	// Add your code here that you want to run when the page route ID changes
	$: {
		currentPage = $page.route.id?.split('/').pop() || '';
		getVisibleSections();
		if (main) main.scrollTo(0, 0);
	}

	onMount(() => {
		main.addEventListener('scroll', getVisibleSections);
	});
</script>

<Search {sections} />
<!-- Mobile Sidebar -->
<div
	class="absolute z-50 w-[360px] transition-all ease-in-out duration-500 {$sidebarShowing
		? 'translate-x-0'
		: '-translate-x-[360px]'} top-16 h-[calc(100vh-64px)] lg:hidden overflow-scroll border-r-[1px] border-zinc-300 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900"
>
	<Sidebar {sections} />
</div>

<!-- Mobile Screen -->
<button
	on:click={() => sidebarShowing.set(false)}
	class="lg:hidden absolute z-40 top-16 inset-0 bg-opacity-50 transition-all ease-in-out duration-500 backdrop-filter backdrop-blur-sm {$sidebarShowing
		? 'opacity-100 pointer-events-auto'
		: 'opacity-0 pointer-events-none'}"
/>

<div class="grid grid-cols-1 lg:grid-cols-[240px,1fr] h-screen">
	<!-- Desktop Sidebar -->
	<div
		class="hidden lg:block border-r-[1px] border-zinc-300 dark:border-zinc-800 overflow-y-scroll h-screen"
	>
		<Sidebar {sections} />
	</div>

	<!-- Main Content -->
	<div class="flex flex-col relative overflow-y-scroll" bind:this={main}>
		<!-- Main Nav -->
		<div
			class="fixed h-16 border-b-[1px] border-zinc-300 dark:border-zinc-800 z-20 w-full lg:w-[calc(100vw-240px)] bg-white/60 dark:bg-zinc-900/60 backdrop-filter backdrop-blur-sm"
		>
			<Navbar />
		</div>

		<!-- Main Page -->
		<main class="flex-grow prose dark:prose-invert relative">
			<Background />
			<div class="my-16 p-8 absolute w-full">
				<div class="flex flex-col min-h-[calc(100vh-128px)]">
					<div class="flex-grow">
						<slot />
					</div>
					<Footer />
				</div>
			</div>
		</main>
	</div>
</div>

<svelte:head>
	<script>
		if (window) {
			// On page load or when changing themes, best to add inline in `head` to avoid FOUC
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	</script>
</svelte:head>
