<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import Truncate from '$lib/truncate.svelte';
	export let data: PageData;
</script>

<h2 class="pt-5 pb-5 text-3xl font-bold">Umgesetzte Projekte</h2>
<div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
	{#each data.projects.data as project}
		<div class="card shadow">
			{#if project.attributes.Teaser.data}
				<figure class="h-64">
					<img
						src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.medium.url}"
						alt=""
						class="object-none w-full h-full"
					/>
				</figure>
			{/if}
			<div class="card-body">
				<h2 class="card-title">{project.attributes.Name}</h2>
				{#if project.attributes.Summary}
					<p><Truncate text={project.attributes.Summary} /></p>
				{/if}
				<div class="card-actions justify-end ">
					<a href="/project/{project.attributes.Slug}"
						><button class="btn btn-primary text-white">Zum Projekt</button></a
					>
				</div>
			</div>
		</div>
	{/each}
</div>
