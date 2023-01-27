<script lang="ts" context="module">
	import { Client } from '$lib/client';
	let projects = Client(
		`query {
            projects(filters: { Highlight: { eq: true } }, pagination: {start: 0, limit: 3}) {
            data {
            attributes {
                Slug
                Name
                Summary
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
</script>

<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import Truncate from '$lib/truncate.svelte';
</script>

<h2 class="text-2xl mt-10">Weitere Projekte</h2>
<div class="flex flex-wrap justify-between mt-5">
	{#await projects}
		<!-- TODO: Spinner -->
	{:then data}
		{#each data.projects.data as project}
			<div class="card w-96 shadow mb-10">
				{#if project.attributes.Teaser.data}
					<figure class="bg-slate-200">
						<img
							src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.small.url}"
							alt=""
							class="object-contain h-64"
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
	{/await}
</div>
