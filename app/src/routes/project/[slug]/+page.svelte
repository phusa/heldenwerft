<script lang="ts">
    import type { PageData } from './$types';
    import { PUBLIC_CMS_URL } from '$env/static/public';
    import SvelteMarkdown from 'svelte-markdown';
    import OtherProjects from '$lib/component/other-projects.svelte';
    export let data: PageData;
    $: project = (data.projects.data[0]) ? data.projects.data[0].attributes : null;
</script>

{#if project}
    <figure class="h-64 overflow-hidden">
        {#if project.Teaser.data}
            <img src="{PUBLIC_CMS_URL}{project.Teaser.data.attributes.formats.large.url}" alt="" class="w-full -mt-[35%]"/>
        {:else}
        <!-- TODO: generic place holder image -->
        {/if}
    </figure>

    <div class="flex bg-slate-100 justify-center">
        {#if project.Semester.data}
        <div class="card card-side">
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg></figure>
            <div class="card-body">
                <p>{project.Semester.data.attributes.Semester}</p>
            </div>
        </div>
        {/if}

        {#if project.Students}
        <div class="card card-side">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  
            </figure>                         
            <div class="card-body">
                {project.Students} Studierende
            </div>
        </div>
        {/if}
        
          
        {#if project.Category.data}
        <div class="card card-side">
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </figure>
            <div class="card-body">
                {project.Category.data.attributes.Category}
            </div>
        </div>
        {/if}
    </div>

    <article class="mt-10 lg:pr-10 lg:pl-10 pl-5 pr-5">
        <h1 class="text-3xl font-bold">{project.Name}</h1>
        <h2 class="text-xl mt-2">{project.Summary}</h2>
        {#if project.Description}
            <div class="mt-10 markdown"><SvelteMarkdown source={project.Description} /></div>
        {/if}
    </article>

    {#each project.Testimonials as testimonial}
        <div class="flex bg-slate-100 mt-20 p-5 justify-center">
            <div class="card card-side">
                {#if testimonial.Avatar.data}
                    <figure>
                        <img src="{PUBLIC_CMS_URL}{testimonial.Avatar.data.attributes.formats.thumbnail.url}" alt="" class="object-none mask-circle mask"/>
                    </figure>
                {/if}
                <div class="card-body w-1/2">
                    <p class="text-2xl">"{testimonial.Testimonial}"</p>
                    <p>{testimonial.Name}</p>
                </div>
            </div>
        </div>
    {/each}

    {#if project.Media.data}
        <div class="carousel mt-20">
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

    {#if project.Organisations.data}
        <div class=" bg-slate-100 mt-20 p-5 justify-center">
            <h2 class="text-xl">Unterstützte Organisationen</h2>        
            {#each project.Organisations.data as organisation}
            <div class="card card-side">
                {#if organisation.attributes.Logo}
                    <figure>
                        <img src="{PUBLIC_CMS_URL}{organisation.attributes.Logo.data.attributes.formats.thumbnail.url}" alt="" class="object-none mask-circle mask"/>
                    </figure>
                {/if}
                <div class="card-body w-1/2">
                    <h3 class="font-bold">{organisation.attributes.Name}</h3>
                    <p>{organisation.attributes.Description}</p>
                </div>
            </div>
            {/each}
        </div>
    {/if}

    <OtherProjects/>

{:else}
    <h1>Projekt nicht gefunden</h1>
{/if}