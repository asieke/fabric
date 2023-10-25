<script lang="ts">
	import { sidebarShowing, searchShowing } from '$lib/stores';
	import { Menu, Sun, Search } from 'lucide-svelte';

	const toggle = () => {
		sidebarShowing.update((v) => !v);
	};

	const darkMode = () => {
		//toggle dark class on the document element
		document.documentElement.classList.toggle('dark');
		//toggle dark mode in local storage
		localStorage.theme = localStorage.theme === 'dark' ? '' : 'dark';
	};

	const toggleSearch = () => {
		searchShowing.update((v) => !v);
	};
</script>

<nav class="h-full flex flex-row items-center justify-between px-4 w-full dark:text-white">
	<!-- Mobile  -->
	<div class="flex flex-row space-x-3 lg:hidden">
		<button on:click={toggle}>
			<Menu />
		</button>
		<div class="text-xl font-bold tracking-tighter">Fabric SDK</div>
	</div>

	<!-- Desktop -->
	<div class="hidden lg:flex flex-row">
		<button
			on:click={toggleSearch}
			class="rounded-full border-[1px] w-64 py-1 px-4 text-xs flex flex-row items-center justify-between text-slate-500 bg-white dark:bg-zinc-800/60 dark:border-zinc-700"
		>
			<span class="flex flex-row items-center">
				<Search class="h-[14px] w-[14px] mr-3" />Find Something
			</span>
			<span class="mr-2"> ⌘K</span>
		</button>
	</div>

	<!-- Menu - Both -->
	<div>
		<button on:click={darkMode}><Sun /></button>
	</div>
</nav>
