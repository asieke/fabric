<script lang="ts">
	import { onMount } from 'svelte';
	export let data;
</script>

{#if data && data.html}
	{@html data.html}
{/if}
