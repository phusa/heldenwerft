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
								title: 'Name',
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
								title: 'Name',
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

<h1 class="text-3xl xl:text-4xl font-semibold pt-4">Bewerbungsformular</h1>
<br>
<Application {application}></Application>
