<script>
	// @ts-nocheck

	import Application from '$lib/component/application.svelte';

	let application = {
		currentStep: 0,
		steps: [
			{
				id: 0,
				title: 'In welchem Bereich kann euch das Service-Learning Projekt unterstützen?',
				skipable: true,
				sections: [
					{
						type: 'selection',
						title: '',
						elements: [
							{
								title: 'Marketing & Reichweite',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							},
							{
								title: 'Finanzierung & Fundarising',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							},
							{
								title: 'Strategie & Organisation',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							}
						],
					},
				],
			},
			{
				id: 1,
				title: 'Beschreibe kurz das konkrete Problem, bei dem euch das Service-Learning Projekt unterstützen kann.',
				skipable: false,
				sections: [
					{
						type: 'textarea',
						title: '',
						elements: [
							{
								title: '',
								type: 'text',
								required: true,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 2,
				title: 'Wenn ihr schon einen Lösungsansatz für euer Problem habt, wie könnte dieser konkret aussehen?',
				skipable: true,
				sections: [
					{
						type: 'textarea',
						title: '',
						elements: [
							{
								title: '',
								type: 'text',
								required: false,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 3,
				title: 'Wie ist der Name eurer Organisation?',
				skipable: false,
				sections: [
					{
						type: 'textfield',
						title: '',
						elements: [
							{
								title: '',
								type: 'text',
								required: true,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 4,
				title: 'Was ist die Mission eurer Organisation?',
				skipable: false,
				sections: [
					{
						type: 'textarea',
						title: '',
						elements: [
							{
								title: '',
								type: 'text',
								required: true,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 5,
				title: '',
				skipable: true,
				sections: [
					{
						type: 'fileupload',
						title: '',
						elements: [
							{
								title: 'Was ist euer Logo?',
								type: 'file',
								required: false,
								error: '',
								value: '',
							},
							{
								title: 'Sonstige Materialien',
								type: 'file',
								required: false,
								error: '',
								value: '',
							},
						],
					},
					{
						type: 'textfield',
						title: 'Link',
						elements: [
							{
								title: '',
								type: 'text',
								required: false,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 6,
				title: 'Wann wärt ihr frühestens bereit das Projekt mit uns durchzuführen?',
				skipable: true,
				sections: [
					{
						type: 'selection',
						title: '',
						info: 'Projekte werden jeden Jahr im Frühjahrssemester zwischen März & Juni umgesetzt',
						elements: [
							{
								title: 'März 2023',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							},
							{
								title: 'März 2024',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							},
							{
								title: 'März 2025',
								type: 'checkbox',
								required: false,
								error: '',
								value: false,
							}
						],
					},
				],
			},
			{
				id: 7,
				title: 'Kontaktangaben der Ansprechpersonen',
				type: 'sequential',
				skipable: false,
				sections: [
					{
						type: 'textfield',
						title: '',
						elements: [
							{
								title: 'Name (Hauptansprechpartner)',
								type: 'text',
								required: true,
								error: '',
								value: '',
							},
							{
								title: 'E-Mail Adresse',
								type: 'email',
								required: true,
								error: '',
								value: '',
							},
							{
								title: 'Telefonnummer',
								type: 'tel',
								required: true,
								error: '',
								value: '',
							},
						],
					},
					{
						type: 'textfield',
						title: '',
						elements: [
							{
								title: 'Name (Optionaler 2. Ansprechpartner)',
								type: 'text',
								required: true,
								error: '',
								value: '',
							},
							{
								title: 'E-Mail Adresse',
								type: 'email',
								required: true,
								error: '',
								value: '',
							},
							{
								title: 'Telefonnummer',
								type: 'tel',
								required: true,
								error: '',
								value: '',
							},
						],
					},
				],
			},
			{
				id: 8,
				title: 'Zusammenfassung & Abschluss',
				sections: []
			}
		]
	};
</script>

<div class="h-64">
	<img class="object-cover h-64 w-full" src="/application.jpg" alt="Uni"/>
</div>
<div class="px-4 py-2 lg:px-16 bg-primary text-white">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		<div class="flex items-center lg:justify-center">
			<span class="flex-shrink-0 rounded-full bg-white p-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="h-8 w-8 stroke-primary">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
				</svg>
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Lernen durch Engagement</h2>
			</div>
		</div>

		<div class="flex items-center lg:justify-center">
			<span class="flex-shrink-0 rounded-full bg-white p-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="h-8 w-8 stroke-primary">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
				</svg>				
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Einzigartige Projekte</h2>
			</div>
		</div>

		<div class="flex items-center lg:justify-center">
			<span class="flex-shrink-0 rounded-full bg-white p-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="h-8 w-8 stroke-primary">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
				</svg>
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Etwas Gutes tun</h2>
			</div>
		</div>
	</div>
</div>

<div class="px-4 lg:px-16">
	<div class="mt-4 md:mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
		<div class="relative h-100 overflow-hidden lg:h-full">
			<h1 class="text-3xl xl:text-4xl font-semibold pt-4">Bewerbungsformular</h1>
		</div>
	</div>
	<Application {application}></Application>
</div>

