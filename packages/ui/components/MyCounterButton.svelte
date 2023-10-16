<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick} class="p-4 bg-red-500 border-black hover:bg-blue-400">
  clicks: {count}
</button>
