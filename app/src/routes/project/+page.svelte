<script lang="ts">
    import type { PageData } from './$types';
    import { PUBLIC_CMS_URL } from '$env/static/public';
    import Truncate from '$lib/truncate.svelte';
    export let data: PageData;
</script>
<h2 class="pt-5 pb-5 text-3xl font-bold">Umgesetzte Projekte</h2>
<div class="flex flex-wrap justify-between">
{#each data.projects.data as project}
    <div class="card w-96 shadow mb-10">
        {#if project.attributes.Teaser.data}
            <figure class="bg-slate-200">
                <img src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.small.url}" alt="" class="object-contain h-96"/>
            </figure>
        {/if}
        <div class="card-body">
            <h2 class="card-title">{project.attributes.Name}</h2>
            {#if project.attributes.Summary}
                <p><Truncate text={project.attributes.Summary}/></p>
            {/if}
            <div class="card-actions justify-end ">
                <a href="/project/{project.attributes.Slug}"><button class="btn btn-primary text-white">Zum Projekt</button></a>
          </div>
        </div>
    </div>
{/each}
</div>