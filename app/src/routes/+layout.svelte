<script lang="ts">
	import Header from '$lib/component/layout/header.svelte';
	import Footer from '$lib/component/layout/footer.svelte';
	import '../app.css';
</script>

<header class="bg-sky-500">
	<Header/>
</header>
<main class="bg-white pb-10">
	<slot />
</main>
<footer>
	<Footer/>
</footer>