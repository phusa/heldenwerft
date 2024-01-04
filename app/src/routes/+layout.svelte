<script lang="ts">
	import Header from '$lib/component/layout/header.svelte';
	import Footer from '$lib/component/layout/footer.svelte';
	import '../app.css';
</script>

<header class="bg-sky-500 bg-opacity-70 backdrop-blur-xl fixed w-full top-0 left-0 z-50">
	<Header/>
</header>
<div class="h-16 bg-sky-500"></div>
<main class="bg-white pb-10">
	<slot />
</main>
<footer>
	<Footer/>
</footer>