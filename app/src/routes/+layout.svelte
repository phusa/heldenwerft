<script lang="ts">
	import Header from '$lib/component/layout/header.svelte';
	import Footer from '$lib/component/layout/footer.svelte';
	import '../app.css';
</script>

<header class="bg-base-100">
	<Header/>
</header>
<main>
	<slot />
</main>
<footer class="bg-[#4472C4]">
	<Footer/>
</footer>