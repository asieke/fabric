<script>
  import '$styles/app.css';
  import { Sidebar, Navbar, Background, Footer } from '$components';
  import { sidebarShowing } from '$lib/stores';
</script>

<Background />

<!-- Mobile Screen -->
<div
  class="md:hidden absolute z-40 top-16 inset-0 bg-opacity-50 transition-all ease-in-out duration-500 backdrop-filter backdrop-blur-sm {$sidebarShowing
    ? 'opacity-100 pointer-events-auto'
    : 'opacity-0 pointer-events-none'}"
/>

<!-- Mobile Sidebar -->
<div
  class="absolute z-50 w-[360px] transition-all ease-in-out duration-500 {$sidebarShowing
    ? 'translate-x-0'
    : '-translate-x-[360px]'} top-16 h-[calc(100vh-64px)] md:hidden overflow-scroll border-r-[1px] shadow-lg"
>
  <Sidebar />
</div>

<div
  class="z-20 absolute left-[0px] md:left-[240px] h-16 w-full md:w-[calc(100vw-240px)] backdrop-filter backdrop-blur-sm border-b-[1px] bg-white/90"
>
  <Navbar />
</div>
<div
  class="absolute z-20 h-full overflow-scroll border-r-[1px] hidden md:block"
  style="width: 240px"
>
  <Sidebar />
</div>

<div
  class="z-10 absolute h-full left-[0px] md:left-[240px] overflow-scroll pt-16 w-full md:w-[calc(100vw-240px)]"
>
  <div class="flex flex-col" style="min-height: calc(100vh - 64px)">
    <div class="flex-grow">
      <slot />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</div>

<svelte:head>
  <script>
    if (window) {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  </script>
</svelte:head>
