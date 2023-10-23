<script lang="ts">
	import '$styles/app.css';
	import { Sidebar, Navbar, Background, Footer } from '$components';
	import { sidebarShowing, visibleSections, allSections } from '$lib/stores';
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let main: HTMLDivElement;

	let currentPage = $page.route.id;

	const updateSectionIds = async () => {
		tick().then(() => {
			if (browser) {
				const h2s = document.querySelectorAll('h2');
				allSections.set([]);
				//for each h2, find the parent section immediately above the h2 and add an ID to it
				h2s.forEach((h2) => {
					allSections.set([...$allSections, h2.innerText]);
					const section = h2.closest('section');
					if (section) {
						section.id = h2.innerText.toLowerCase().replace(/ /g, '-');
					}
				});
			}
		});
	};

	const getVisibleSections = () => {
		//return an array of strings with the ids of the sections that are currently visible
		try {
			const sections = document.querySelectorAll('section');
			const visible = [];
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const rect = section.getBoundingClientRect();

				if (rect.bottom <= 50 || rect.top >= window.innerHeight - 50 || section.id === '') {
					continue;
				}
				visible.push(section.id);
			}
			visibleSections.set(visible);
		} catch (e) {}
	};

	onMount(() => {
		if (main) {
			main.addEventListener('scroll', (e) => {
				getVisibleSections();
			});
		}
	});

	$: {
		currentPage = $page.route.id;
		console.log(currentPage);
		updateSectionIds().then(() => {
			getVisibleSections();
		});
	}
</script>

<!-- Mobile Sidebar -->
<div
	class="absolute z-50 w-[360px] transition-all ease-in-out duration-500 {$sidebarShowing
		? 'translate-x-0'
		: '-translate-x-[360px]'} top-16 h-[calc(100vh-64px)] lg:hidden overflow-scroll border-r-[1px] border-zinc-300 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900"
>
	<Sidebar />
</div>

<!-- Mobile Screen -->
<div
	class="lg:hidden absolute z-40 top-16 inset-0 bg-opacity-50 transition-all ease-in-out duration-500 backdrop-filter backdrop-blur-sm {$sidebarShowing
		? 'opacity-100 pointer-events-auto'
		: 'opacity-0 pointer-events-none'}"
/>

<div class="grid grid-cols-1 lg:grid-cols-[240px,1fr] h-screen">
	<!-- Desktop Sidebar -->
	<div
		class="hidden lg:block border-r-[1px] border-zinc-300 dark:border-zinc-800 overflow-y-scroll h-screen"
	>
		<Sidebar />
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

		function toggle() {
			let language = 'javascript';
		}
	</script>
</svelte:head>
