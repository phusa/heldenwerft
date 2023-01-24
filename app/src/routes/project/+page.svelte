<script lang="ts">
    import type { PageData } from './$types';
    import { PUBLIC_CMS_URL } from '$env/static/public';
    export let data: PageData;
</script>
<h1>Projekte</h1>

<div class="flex">
{#each data.projects.data as project}

    <div class="card lg:card-side">
        {#if project.attributes.Teaser}
            <figure>
                <img src="{PUBLIC_CMS_URL}{project.attributes.Teaser.data.attributes.formats.small.url}" alt=""/>
            </figure>
        {/if}
        <div class="card-body">
            <h2 class="card-title">{project.attributes.Name}</h2>
            {#if project.attributes.Summary}
                <p>{project.attributes.Summary}</p>
            {/if}
            <a href="/project/{project.attributes.Slug}">Projektdetails</a>
        </div>
    </div>
{/each}
</div>