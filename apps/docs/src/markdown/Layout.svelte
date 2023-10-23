<script>
	import Grid from '$markdown/components/Grid.svelte';
	export let title;
	export let author;
	export let date;

	let value = 'hello';
</script>

<slot>
	<!-- the mdsvex content will be slotted in here -->
</slot>
