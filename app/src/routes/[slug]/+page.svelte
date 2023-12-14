<script lang="ts">
    import type { PageData } from './$types';
    import componentMap from '$lib/component/all';
    export let data: PageData;

    let page = null;

    if (data.pages.data[0]) {
		page = data.pages.data[0].attributes;
    }
</script>

{#if page.Body.length > 0}
    {#each page.Body as content}
        <svelte:component
            this={componentMap[content.__typename]}
            content={content}
        />
    {/each}
{:else}
    Seite konnte nicht gefunden werden
{/if}