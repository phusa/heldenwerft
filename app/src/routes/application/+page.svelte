<script>
	import Card from '$lib/component/element/card.svelte';

	let application = {
		organization: '',
		type_marketing: false
	};
</script>

<h1>Projekt vorschlagen</h1>

<ul class="steps steps-vertical lg:steps-horizontal">
	<li class="step step-primary">xxx</li>
	<li class="step">xxx</li>
</ul>

<form method="POST" action="/application">
	Wie können wir helfen?

	<div
		class="border rounded w-1/3 checked-{application.type_marketing}"
		on:click={() => {
			application.type_marketing = !application.type_marketing;
		}}
		on:keypress={() => {
			application.type_marketing = !application.type_marketing;
		}}
	>
		<label for="type-marketing" class="">Marketing & Reichweite</label><br />
		<input
			id="type-marketing"
			name="type_marketing"
			type="checkbox"
			class="checkbox border-none"
			bind:checked={application.type_marketing}
		/>
	</div>

	<button type="submit">Abschicken</button>
</form>

<style>
	.checked-true {
		background-color: #345;
		color: white;
	}
</style>
