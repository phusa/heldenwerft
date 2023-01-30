<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import Truncate from '$lib/truncate.svelte';
	import Projects from '$lib/component/projects.svelte';
	export let data: PageData;
</script>

<h2 class="pt-5 pb-5 text-3xl font-bold">Umgesetzte Projekte</h2>
<Projects/>