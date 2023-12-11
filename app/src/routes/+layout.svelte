<script lang="ts">
	import Header from '$lib/component/layout/header.svelte';
	import Footer from '$lib/component/layout/footer.svelte';
	import '../app.css';
</script>

<Header/>
<main>
	<slot />
</main>
<Footer/>