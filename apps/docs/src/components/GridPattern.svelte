<script lang="ts">
	let counter = 0;

	function generateId() {
		return `R${Math.random().toString(36).substr(2, 4)}${counter++}`;
	}

	export let width = 0;
	export let height = 0;
	export let x = 0;
	export let y = 0;
	export let squares: Array<[number, number]>;

	let patternId = generateId();
</script>

<svg
	aria-hidden="true"
	class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
>
	<defs>
		<pattern id={patternId} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
			<path d={`M.5 ${height}V.5H${width}`} fill="none" />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width="0" fill={`url(#${patternId})`} />
	{#if squares.length}
		<svg {x} {y} class="overflow-visible">
			{#each squares as [x, y] (x)}
				<rect stroke-width="0" width={width + 1} height={height + 1} x={x * width} y={y * height} />
			{/each}
		</svg>
	{/if}
</svg>
