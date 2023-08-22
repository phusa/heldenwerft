<script lang="ts">
	import Projects from '$lib/component/projects.svelte';
</script>

<div class="h-64">
	<img class="object-cover h-64 w-full" src="/university.jpg" alt="Uni"/>
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
			<h1 class="text-3xl xl:text-4xl font-semibold pt-4">Service Learning Projekt</h1>
			<h2 class="text-xl xl:text-2xl pt-2">
				Lernen durch Engagement
			</h2>
			<a href="https://www.uni-flensburg.de/studium-lehre/studienangebot/management/ma-international-management-studies-bwl" class="link link-primary flex items-center mt-4" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-primary mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>                  
				Allgemeine Informationen zum Studiengang für Interessierte
			</a>
		</div>

		<div class="space-y-4 text-gray-600">
			<p>
				Das Service Learning Projekt ist eine Lehrveranstaltung, die fest im Curriculum des M.A. International Management Studies – BWL der Europa-Universität Flensburg verankert ist. Im Rahmen eures Studiums könnt ihr in Kleingruppen mit Kommiliton:innen einer gemeinnützigen Organisation, Initiative o. ä. unter die Arme greifen und aktiv etwas Gutes tun.
			</p>

			<p>
                Ihr gewinnt einen tiefergehenden Einblick in die alltäglichen Managementprobleme von kleinen gemeinnützigen Organisationen, werdet für die spezifischen Problemlagen kleiner Unternehmen sensibilisiert und erhaltet zugleich eine nähere Vorstellung von den Besonderheiten gemeinnütziger Organisationen.
			</p>
		</div>
	</div>

	<div class="pt-16">
		<h1 class="text-3xl font-semibold py-4 lg:py-0">Rahmenbedingungen</h1>
		<h2 class="text-2xl">
			Hier findet ihr unsere 'Frequently Asked Questions' (kurz FAQ) für Studenten
		</h2>
	</div>

	<div class="mt-8 mb-24">
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Lorem ipsum dolor sit amet, consetetur sadipscing elitr?</h2>

				<svg
					class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</summary>

			<p class="px-4 mt-2 mb-6 leading-relaxed">
				Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Lorem ipsum dolor sit amet, consetetur sadipscing elitr?</h2>

				<svg
					class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</summary>

			<p class="px-4 mt-2 mb-6 leading-relaxed">
				Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Lorem ipsum dolor sit amet, consetetur sadipscing elitr?</h2>

				<svg
					class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</summary>

			<p class="px-4 mt-2 mb-6 leading-relaxed">
				Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
		</details>
	</div>
</div>

<div class="text-center text-3xl font-bold pt-8">Umgesetzte Projekte</div>
<Projects limit={3} />

<div class="px-4 pb-12 pt-12 mt-4 sm:px-6 lg:px-8 bg-gray-100">
	<div class="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-3">
		<div
			class="relative w-full mx-auto rounded-tl-[50px] rounded-br-[50px] bg-white shadow-lg px-5 pt-5 mt-8 pb-10 text-gray-800"
			style="max-width: 500px"
		>
			<div class="w-full pt-1 pb-5">
				<div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
					<img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
				</div>
			</div>
			<div class="w-full mb-16">
				<div class="text-3xl text-primary text-left leading-tight h-3">“</div>
				<p class="text-gray-600 text-center px-5">
					Es war einfach komplett erfüllend und hat wahnsinnig viel Spaß gemacht.
				</p>
				<div class="text-3xl text-primary text-right leading-tight h-3 -mt-3">”</div>
			</div>
			<div class="absolute bottom-8 right-8">
				<p class="text-md text-primary font-bold text-center">- Mareike Barner -</p>
			</div>
		</div>
		<div
			class="relative w-full mx-auto rounded-tl-[50px] rounded-br-[50px] bg-white shadow-lg px-5 pt-5 mt-8 pb-10 text-gray-800"
			style="max-width: 500px"
		>
			<div class="w-full pt-1 pb-5">
				<div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
					<img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
				</div>
			</div>
			<div class="w-full mb-16">
				<div class="text-3xl text-primary text-left leading-tight h-3">“</div>
				<p class="text-gray-600 text-center px-5">
					Was mit einem Universitätsprojekt begann, ist für uns schnell zu einer Herzenssache
					geworden.
				</p>
				<div class="text-3xl text-primary text-right leading-tight h-3 -mt-3">”</div>
			</div>
			<div class="absolute bottom-8 right-8">
				<p class="text-md text-primary font-bold text-center">- Mareike Barner -</p>
			</div>
		</div>
		<div
			class="relative w-full mx-auto rounded-tl-[50px] rounded-br-[50px] bg-white shadow-lg px-5 pt-5 mt-8 pb-10 text-gray-800"
			style="max-width: 500px"
		>
			<div class="w-full pt-1 pb-5">
				<div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
					<img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
				</div>
			</div>
			<div class="w-full mb-16">
				<div class="text-3xl text-primary text-left leading-tight h-3">“</div>
				<p class="text-gray-600 text-center px-5">
					Während Management oft mit Profitmaximierung gleichsetzt wird, lernten wir beim SLP auch
					soziale Verantwortung innerhalb einer Managementtätigkeit zu übernehmen.
				</p>
				<div class="text-3xl text-primary text-right leading-tight h-3 -mt-3">”</div>
			</div>
			<div class="absolute bottom-8 right-8">
				<p class="text-md text-primary font-bold text-center">- Mareike Barner -</p>
			</div>
		</div>
	</div>
</div>
<div class="px-4 text-center py-8">
	<h1 class="text-3xl font-bold">Habt ihr Fragen?</h1>
	<h2 class="text-2xl pt-3">Hier gehts zum Kontaktformular!</h2>
	<a href="#top">
		<button class="btn btn-primary mt-6">Kontaktieren</button>
	</a>
</div>