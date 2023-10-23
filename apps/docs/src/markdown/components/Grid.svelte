<script>
	export let title = '';
	console.log(title);
</script>

<div class="bg-green-500">{title}</div>
<div class="bg-red-500">
	<slot />
</div>
