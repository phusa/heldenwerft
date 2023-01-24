<script lang="ts">
    import type { PageData } from './$types';
    import { env } from '$env/dynamic/public';
    export let data: PageData;
    let project = (data.projects.data[0]) ? data.projects.data[0].attributes : null;
    console.log(project)
</script>
{#if project}
    {#if project.Teaser}
        <img src="{env.PUBLIC_CMS_URL}{project.Teaser.data.attributes.url}" alt=""/>
    {/if}
    {#if project.Semester}scsd
        {project.Semester.data.attributes.Semester}
    {/if}

    {#if project.Students}
        {project.Students} Studierende
    {/if}

    {#if project.Category}
        {project.Category.data.attributes.Category}
    {/if}

    <h1>{project.Name}</h1>
    <h2>{project.Summary}</h2>
    <div>{project.Description}</div>
{:else}
    <h1>Projekt nicht gefunden</h1>
{/if} 
