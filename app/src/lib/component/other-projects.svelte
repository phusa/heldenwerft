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

<h2 class="text-2xl mt-10 pb-5">Weitere Projekte</h2>
<div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
	{#await projects}
		<!-- TODO: Spinner -->
	{:then data}
		{#each data.projects.data as project}
			<div class="card shadow mb-10">
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
	{/await}
</div>
