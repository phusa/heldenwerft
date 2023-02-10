<script lang="ts">
	import Projects from '$lib/component/projects.svelte';
</script>

<div class="h-64">
	<img class="object-cover h-64 w-full" src="/organisation.jpg" />
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
			<h1 class="text-3xl xl:text-4xl font-semibold pt-4">Ihr habt ein Problem?</h1>
			<h2 class="text-xl xl:text-2xl pt-2">
				Wir unterstützen euch im Rahmen unseres Service Learning Projektes
			</h2>
			<a
				href="/service-learning-projekt.pdf"
				class="link link-primary flex items-center mt-4"
				download
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 stroke-red-500 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
					/>
				</svg>
				Merkblatt für gemeinnützige Organisationen.pdf
			</a>
		</div>

		<div class="space-y-4 text-gray-600">
			<p>
				Im Rahmen dieser Lehrveranstaltung arbeiten Studierende des Masterstudiengangs
				International Management Studies – BWL in Kleingruppen mit Ihnen zusammen, um euer Problem
				zu lösen.
			</p>

			<p>
				Ihr möchtet mit uns zusammenarbeiten? Um eine mögliche Zusammenarbeit vorbereiten zu
				können, benötigen wir von euch einige Hinweise zu eurer Organisation, eine Ansprechperson
				sowie eine Projektidee oder Problemstellung, die innerhalb des Service Learning Projekts
				umgesetzt werden könnte.
			</p>
		</div>
	</div>

	<div class="pt-16">
		<h1 class="text-3xl font-semibold py-4 lg:py-0">Rahmenbedingungen</h1>
		<h2 class="text-2xl">
			Hier findet ihr unsere 'Frequently Asked Questions' (kurz FAQ) für Organisationen
		</h2>
	</div>

	<div class="mt-8 mb-24">
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Wie lang darf ein Projekt dauern?</h2>

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
				Die Projekte werden von Studierendengruppen im Rahmen eines Semesters umgesetzt. Jedes Jahr
				ca. von März bis Juni (im Frühjahrssemester) wird an den Projekten gearbeitet. Die Projekte
				müssen dementsprechend in diesem Zeitraum umsetzbar sein.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Ist meine Organisation dafür geeignet?</h2>

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
				Im Service Learning Projekt wird Studierenden die Möglichkeit gegeben, während ihres Studiums Praxiserfahrung zu sammeln und etwas Gutes zu tun. Ihr könnt Euch bewerben, wenn Eure Organisation/Euer Projekt einen gemeinnützigen, sozialen Zweck erfüllt.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Welche Arten von Projekten sind denkbar?</h2>

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
				Grundsätzlich sind der Fantasie keine Grenzen gesetzt, so lange das Projekt in Hinblick auf Arbeitspensum und der Dauer von den Studierenden innerhalb eines Semesters zum Abschluss gebracht werden kann. Schaut Euch gern bei den bereits abgeschlossenen Projekten um, um einen Eindruck zu bekommen.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Was müssen wir als Organisation leisten?</h2>

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
				Damit die Studierenden immer wissen, was von ihnen erwartet wird, benötigen sie eine Ansprechperson. Während der Projektlaufzeit müsst Ihr als Organisation also eine Ansprechperson bereitstellen, die die Studierenden betreut und unterstützt.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Wie wird die Qualität der Arbeit der Studierenden überwacht?</h2>

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
				Alle Studierendengruppen werden durch Dozent:innen der EUF betreut, die als Ansprechpersonen in fachlichen Fragen zur Verfügung stehen und auch ggf. Impulse geben können, falls sich ein Stillstand abzeichnet.
			</p>
		</details>
		<details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
			<summary class="flex items-center justify-between p-4 cursor-pointer bg-gray-50">
				<h2 class="font-medium">Wie können wir uns bewerben?</h2>

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
				Klickt einfach hier und schickt uns eine Bewerbung mit einer Projektidee, die wir dann gemeinsam besprechen und ggf. konkretisieren oder vertiefen können.
			</p>
		</details>
	</div>
</div>

<div class="text-center text-3xl font-bold">Umgesetzte Projekte</div>
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
	<h1 class="text-3xl font-bold">Ihre Organisation braucht Unterstützung?</h1>
	<h2 class="text-2xl pt-3">Dann bewerben Sie sich direkt jetzt online!</h2>
	<a href="/application">
		<button class="btn btn-primary mt-6">Jetzt Online bewerben</button>
	</a>
</div>