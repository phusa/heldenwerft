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
	import Truncate from '$lib/helper/truncate.svelte';
	export let limit: Number = 0;
	export let highlight: boolean = false;
	const filter: string[] = [];
	if (highlight == true) filter.push('Highlight: { eq: true }');
	if (limit > 0) filter.push(`pagination: {start: 0, limit: ${limit}}`);
	let filterterString = (filter.length>0 ? '('+filter.join(',')+')' : '');
</script>

<div class="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#await projects(filterterString)}
		<!-- TODO: Spinner -->
	{:then data}
		{#each data.projects.data as project}
			<div class="card shadow-md rounded-3xl bg-[#D9D9D9]">
				{#if project.attributes.Teaser.data}
				<figure class="h-64 relative">
					<img
						src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.medium.url}"
						alt=""
						class="object-none w-full h-full rounded-top"
					/>
					{#if project.attributes.Category.data}
						<span class="absolute right-3 bottom-3 bg-opacity-60 bg-white font-bold text-grey-600 text-md px-3 py-0 rounded">{project.attributes.Category.data.attributes.Category}</span>
					{/if}
				</figure>
				{/if}
				<div class="card-body">
					<h2 class="card-title text-3xl text-gray-600">{project.attributes.Name}</h2>
					{#if project.attributes.Summary}
						<div class="text-gray-600"><Truncate text={project.attributes.Summary} /></div>
					{/if}
					
				</div>
				<div class="justify-end ml-auto mr-auto mb-4 w-11/12">
					<a href="/project/{project.attributes.Slug}" class=""
						><button class="btn bg-[#A6A6A6] rounded-full text-white border-none btn-wide w-full text-2xl normal-case">Projekt ansehen</button></a
					>
				</div>
			</div>
		{/each}
	{/await}
</div>
