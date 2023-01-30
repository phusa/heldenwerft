<script lang="ts" context="module">
	import { Client } from '$lib/client';
	
	let projects = (filter: String) => {
			return Client(
			`query {
				projects${filter} {
				data {
				attributes {
					Slug
					Name
					Summary
					Category {
						data {
							attributes {
							Category
							}
						}
						}
					Teaser {
						data {
							attributes {
							url
							formats
							}
						}
					}
				}
				}
			}
		}`
		);
	}
</script>

<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import Truncate from '$lib/truncate.svelte';
	export let limit: Number = 0;
	export let highlight: boolean = false;
	const filter: string[] = [];
	if (highlight == true) filter.push('Highlight: { eq: true }');
	if (limit > 0) filter.push(`pagination: {start: 0, limit: ${limit}}`);
	let filterterString = (filter.length>0 ? '('+filter.join(',')+')' : '');
</script>

<div class="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
	{#await projects(filterterString)}
		<!-- TODO: Spinner -->
	{:then data}
		{#each data.projects.data as project}
			<div class="card shadow rounded-none">
				{#if project.attributes.Teaser.data}
				<figure class="h-64">
					<img
						src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.medium.url}"
						alt=""
						class="object-none w-full h-full"
					/>
				</figure>
				{/if}
				{#if project.attributes.Category.data}
				<div class="items-center px-6 py-3 bg-primary">
					<h1 class="text-white text-lg">{project.attributes.Category.data.attributes.Category}</h1>
				</div>
				{/if}
				<div class="card-body">
					<h2 class="card-title text-2xl font-semibold text-gray-400">{project.attributes.Name}</h2>
					{#if project.attributes.Summary}
						<div class="text-gray-400"><Truncate text={project.attributes.Summary} /></div>
					{/if}
					<div class="card-actions justify-end mt-4">
						<a href="/project/{project.attributes.Slug}" class="w-full"
							><button class="btn btn-primary text-white w-full">Zum Projekt</button></a
						>
					</div>
				</div>
			</div>
		{/each}
	{/await}
</div>
