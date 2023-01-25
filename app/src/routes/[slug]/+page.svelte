<script lang="ts">
    import type { PageData } from './$types';
    import componentMap from '$lib/component/all';
    export let data: PageData;
</script>

{#if data[0]}

    {#each data[0].attributes.Body as content}
        <svelte:component
            this={componentMap[content.__typename]}
            content={content}
        />
    {/each}

    {:else}
    Seite konnte nicht gefunden werden
{/if}