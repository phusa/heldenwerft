<script lang="ts">
	// @ts-nocheck

	import SectionSwitch from '$lib/component/sectionSwitch.svelte';

    export let application = {
		currentStep: Number,
		steps: [
			{
				id: Number,
				title: String,
				skipable: Boolean,
				sections: [
					{
						type: String,
						title: String,
						elements: [
							{
								title: String,
								type: String,
								required: Boolean,
								error: String,
								value: (String||Boolean),
							}
						],
					},
				],
			},
		]
	};

	const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const validatePhone = (number) => {
	return String(number)
		.toLowerCase()
		.match(
		/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
		);
	};

	const validateURL = (url) => {
	return String(url)
		.toLowerCase()
		.match(
			/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
		);
	};

	function crossCheck(el) {
		if(el.required != null && el.required) {
			if(el.type == 'email') {
				if(!validateEmail(el.value)) console.log("Ungültige E-Mail Adresse");
				if(!validateEmail(el.value)) el.error = "Ungültige E-Mail Adresse";
				return validateEmail(el.value);
			}
			if(el.type == 'tel') {
				if(!validatePhone(el.value)) console.log("Ungültige Telefonnummer");
				if(!validatePhone(el.value)) el.error = "Ungültige Telefonnummer";
				return validatePhone(el.value);
			}
			if(el.type == 'url') {
				if(!validateURL(el.value)) console.log("Ungültige URL");
				if(!validateURL(el.value)) el.error = "Ungültige URL";
				return validateURL(el.value);
			}
			if(el.value == '') {
				console.log("Feld darf nicht leer sein");
				el.error = "Feld darf nicht leer sein";
				return false;
			}
		}
		return true;
	}

	function validate() {
		let valid = true;
		application.steps[application.currentStep].sections.forEach(sect => {
			if(sect != null) {
				sect.elements.forEach(el => {
					valid = crossCheck(el);
				});
			}
		});
		return valid;
	}

	const handleNextEvent = () => () => {
		if(validate()) {
			if(application.steps.length-1 != application.currentStep) {
				application.currentStep++;
			}
		} else {
			restart();
		}
	}
	const handlePreviousEvent = () => () => {
		if(0 != application.currentStep) {
			application.currentStep--;
		}
	}
	const handleStep = (id) => () => {
		application.currentStep = id;
	}

	function handleSubmit(e: SubmitEvent) {
		console.log(e);
	}

	let unique = {} // every {} is unique, {} === {} evaluates to false, is used to reload the form after validation failed, to display the errors

	function restart() {
		unique = {}
	}
</script>
{#key unique}
	<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#B6B6B6]">
		<div class="bg-[#345] h-2.5 rounded-full" style="width: {((application.currentStep+1)/application.steps.length)*100}%"></div>
  	</div>

	<form method="POST" action="/application" on:submit|preventDefault={handleSubmit}>
	{#each application.steps as {id, title, type, skipable, sections}, i}
		{#if application.currentStep == id && application.currentStep != application.steps.length-1}
			<!-- Each page until the summary -->
			<h2 class="px-4 pt-5 pb-5 text-3xl">{title}</h2>
			<div class="grid {type == 'sequential' ? 'grid-cols-2' : 'grid-cols-1'}">
				{#each sections as sect}
					{#if sect != null}
						<SectionSwitch {sect}></SectionSwitch>
					{/if}
				{/each}
			</div>
		{:else if application.currentStep == id && application.currentStep == application.steps.length-1}
			<!-- Summary Page -->
			{#each application.steps as step}
				{#if application.currentStep != step.id}
					<p>{step.title}</p>
				{/if}
				{#each step.sections as sect}
					{#if sect != null}
						{#each sect.elements as el}
							<p>{(el.title != '' ? el.title + ': ' : '')}{el.value}</p>
						{/each}
						<br>
					{/if}
				{/each}	
			{/each}
		{/if}
		<!-- Button row at the bottom -->
		{#if application.currentStep == id}
			<div class="flex flex-row">
				<div class="basis-1/8">
					{#if application.currentStep != 0}
						<button 
							class="bg-transparent bg-[#B6B6B6] text-white border-[#B6B6B6] py-2 px-4 border rounded" 
							type="button" 
							on:click={handlePreviousEvent()}>
							Zurück
						</button>
					{/if}
				</div>
				<div class="grow basis-6/8"></div>
				<div class="basis-1/8">
					{#if skipable == true}
						<button 
							class="bg-transparent text-[#345] py-2 px-4 border border-transparent hover:border-transparent rounded" 
							type="button"
							on:click={handleNextEvent()}>
							Überspringen
						</button>
					{/if}
					<button 
						class="bg-transparent bg-[#345] text-white font-semibold py-2 px-4 border border-[#345] rounded" 
						type="{application.currentStep == application.steps.length-1 ? "submit" : "button"}" 
						on:click={handleNextEvent()}>
						{application.currentStep == application.steps.length-1 ? "Abschicken" : "Weiter"}
					</button>
				</div>
			</div>
		{/if}
	{/each}
	</form>
{/key}