<script lang="ts">
    import type { PageData } from './$types';
    import { PUBLIC_CMS_URL } from '$env/static/public';
    export let data: PageData;
    let project = (data.projects.data[0]) ? data.projects.data[0].attributes : null;
</script>
{#if project}
    {#if project.Teaser}
        <img src="{PUBLIC_CMS_URL}{project.Teaser.data.attributes.url}" alt=""/>
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
    
    {#if project.Description}
        <div>{project.Description}</div>
    {/if}

    {#if project.Description}
        <div>{project.Description}</div>
    {/if}

    {#each project.Testimonials as testimonial}
        {#if testimonial.Avatar}
            <figure>
                <img src="{PUBLIC_CMS_URL}{testimonial.Avatar.data.attributes.formats.thumbnail.url}" alt="" />
            </figure>
        {/if}
        {testimonial.Testimonial}
        {testimonial.Name}
    {/each}

    {#if project.Media}
        <div class="carousel rounded-box">
            {#each project.Media.data as pic}
                <div class="carousel-item h-full">
                    <label for="pic-modal-{pic.id}"><img src="{PUBLIC_CMS_URL}{pic.attributes.formats.small.url}" alt="" class="max-h-60 mr-3" /></label>
                </div>
                <input type="checkbox" id="pic-modal-{pic.id}" class="modal-toggle" />
                <label for="pic-modal-{pic.id}" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <img src="{PUBLIC_CMS_URL}{pic.attributes.url}" alt="" />
                </label>
                </label>
            {/each}
        </div>
    {/if}

{:else}
    <h1>Projekt nicht gefunden</h1>
{/if} 
