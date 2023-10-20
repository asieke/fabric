<script>
	import GridPattern from './GridPattern.svelte';
</script>

<div class="absolute z-0 inset-0 mx-0 max-w-none overflow-hidden">
	<div
		class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"
	>
		<div
			class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"
		>
			<GridPattern
				width={72}
				height={56}
				x={-12}
				y={4}
				squares={[
					[4, 3],
					[2, 1],
					[7, 3],
					[10, 6]
				]}
			/>
		</div>
		<svg
			viewBox="0 0 1113 440"
			aria-hidden="true"
			class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
		>
			<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
		</svg>
	</div>
</div>
