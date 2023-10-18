<script lang="ts">
  import { sidebarShowing } from '$lib/stores';
  import { Menu, Sun } from 'lucide-svelte';

  const toggle = () => {
    sidebarShowing.update((v) => !v);
  };
  const darkMode = () => {
    //toggle dark class on the document element
    document.documentElement.classList.toggle('dark');
    //toggle dark mode in local storage
    localStorage.theme = localStorage.theme === 'dark' ? '' : 'dark';
  };
</script>

<nav class="h-full flex flex-row items-center justify-between px-4 bg-green-400 dark:bg-blue-500">
  <!-- Mobile  -->
  <div class="flex flex-row space-x-3 md:hidden">
    <button on:click={toggle}>
      <Menu />
    </button>
    <div class="h-6 w-6 mt-[2px] rounded-lg shadow-md overflow-clip">
      <img src="Logo.png" class="w-full h-full" alt="Logo" />
    </div>
    <div class="text-xl font-bold tracking-tighter">Fabric SDK</div>
  </div>

  <!-- Desktop -->
  <div class="hidden md:flex flex-row">
    <button
      class="rounded-full bg-white border-[1px] w-64 py-2 px-3 text-xs flex flex-row text-slate-500"
    >
      Find Something
    </button>
  </div>

  <!-- Menu - Both -->
  <div>
    <button on:click={darkMode}><Sun /></button>
  </div>
</nav>
