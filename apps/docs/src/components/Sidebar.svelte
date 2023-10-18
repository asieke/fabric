<!-- FILEPATH: /Users/asieke/Desktop/projects/fabric/apps/demo/src/routes/components/Sidebar.svelte -->

<script lang="ts">
	import { MyCounterButton } from 'ui';
</script>

<nav class="bg-white h-full px-8">
	<div class="md:flex md:flex-row space-x-3 h-16 items-center w-full justify-left hidden">
		<div class="h-6 w-6 mt-[2px] rounded-lg shadow-md overflow-clip">
			<img src="Logo.png" class="w-full h-full" alt="Logo" />
		</div>
		<div class="text-xl font-bold tracking-tighter">Fabric SDK</div>
	</div>

	<div class="mt-8 font-bold text-xl mb-6">Menu</div>
	<h2>Guides</h2>

	<MyCounterButton />
</nav>

<style lang="postcss">
	h2 {
		@apply text-xs font-semibold text-zinc-900 dark:text-blue-500;
	}
</style>
