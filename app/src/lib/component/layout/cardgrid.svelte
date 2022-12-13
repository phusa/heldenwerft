<script>
    import Card from '$lib/component/element/card.svelte';
    export let content;
</script>

{#each content.Card as card}
    <Card content={card} />
{/each}
