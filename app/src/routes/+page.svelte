<script>
	import { each } from 'svelte/internal';

    /** @type {import('./$types').PageData} */
    export let data;

  </script>


<div class="container mx-auto mt-4">
    {#each data.data as project}
        {project.id}
        {project.attributes.name}
    {/each}
</div>