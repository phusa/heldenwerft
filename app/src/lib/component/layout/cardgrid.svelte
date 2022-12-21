<script>
    import Card from '$lib/component/element/card.svelte';
    export let content;
</script>

<div class="grid grid-cols-3 gap-4">
{#each content.Card as card}
    <Card content={card} />
{/each}
</div>