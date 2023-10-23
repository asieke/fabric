<script lang="ts">
	import { onMount, tick } from 'svelte';

	export let langs: string[];

	let codeGroup: HTMLDivElement;
	let selectedLanguage = langs[0];

	const toggleLang = (lang: string) => {
		selectedLanguage = lang;
		console.log(selectedLanguage);
		const codeBlocks = codeGroup.querySelectorAll('pre code');
		codeBlocks.forEach((block) => {
			if (!block.parentElement) return;
			if (block.classList[0].split('-')[1] === lang) {
				//style.display defaults to none, set it to block
				block.parentElement.style.display = 'block';
			} else {
				block.parentElement.style.display = 'none';
			}
		});
	};
</script>

<div class="code-group" bind:this={codeGroup}>
	<div
		class="bg-zinc-950 dark:bg-zinc-800 text-white px-4 text-xs flex space-x-4 py-2 rounded-t-lg"
	>
		{#each langs as lang}
			<button class="" on:click={() => toggleLang(lang)}>{lang}</button>
		{/each}
	</div>

	<slot />
</div>
