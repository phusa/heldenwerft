<script lang="ts">
    import type { PageData } from './$types';
    import componentMap from '$lib/component/all';
    export let data: PageData;


    console.log(data);

</script>

{#each data.Body as content}
    <svelte:component
        this={componentMap[content.__typename]}
        content={content}
    />
{/each}
