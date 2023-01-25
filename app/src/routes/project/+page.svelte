<script lang="ts">
    import type { PageData } from './$types';
    import { PUBLIC_CMS_URL } from '$env/static/public';
    export let data: PageData;
</script>
<article class="prose p-4">
    <h2>Umgesetzte Projekte</h2>
</article>
<div class="flex">
{#each data.projects.data as project}

    <div class="card w-96 bg-base-100 shadow-xl">
        {#if project.attributes.Teaser.data}
            <figure>
                <img src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.small.url}" alt="" class="object-contain"/>
            </figure>
        {/if}
        <div class="card-body">
            <h2 class="card-title">{project.attributes.Name}</h2>
            {#if project.attributes.Summary}
                <p>{project.attributes.Summary}</p>
            {/if}
            <div class="card-actions justify-end">
                <a href="/project/{project.attributes.Slug}"><button class="btn btn-primary">Zum Projekt</button></a>
          </div>
        </div>
    </div>
{/each}
</div>