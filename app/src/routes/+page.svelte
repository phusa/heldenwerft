<script lang="ts">
	import Projects from '$lib/component/projects.svelte';
	let playVideo = false;
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
	<div class="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full">
		<img alt="Harbour" src="harbour.jpg" class="absolute inset-0 h-full w-full object-cover" />
	</div>

	<div class="pb-12 lg:py-40 px-3 lg:px-16">
		<h1 class="text-3xl font-bold sm:text-4xl">Service Learning Projekt</h1>
		<h2 class="text-2xl">Lernen durch Engagement</h2>

		<p class="mt-4 text-gray-600">
			Das Service Learning Projekt verbindet universitäres Lernen mit organisationaler
			Praxiserfahrung und gesellschaftlichem Engagement. Im Rahmen der Veranstaltung entwickeln
			Studierende des M.A. International Management Studies – BWL der Europa-Universität Flensburg
			Lösungsansätze für konkrete Probleme und Herausforderungen kleinerer gemeinnütziger
			Organisationen, um diese – in enger Abstimmung mit den verschiedenen Organisationen – selber
			umzusetzen.
		</p>
	</div>
</div>

<div class="px-4 py-12 sm:px-6 lg:px-8 bg-base-200 mt-4">
	<div class="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-3">
		<div class="flex items-start">
			<span class="flex-shrink-0 rounded-lg pt-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
					/>
				</svg>
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Lernen durch Engagement:</h2>
				<p>
					Die Studierenden engagieren sich im Rahmen einer Lehrveranstaltung in gemeinnützigen
					Organisationen und können Ihre Kenntnisse anwenden, indem sie die Lösung für ein konkretes
					Problem erarbeiten und umsetzen.
				</p>
			</div>
		</div>
		<div class="flex items-start">
			<span class="flex-shrink-0 rounded-lg pt-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
					/>
				</svg>
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Einzigartige Projekte:</h2>
				<p>
					Die Projekte, die von den Studierenden umgesetzt werden, können sich in verschiedenen
					Bereichen befinden – Organisation, Strategie oder Finanzierung uvm.
				</p>
			</div>
		</div>
		<div class="flex items-start">
			<span class="flex-shrink-0 rounded-lg pt-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
			</span>

			<div class="ml-4">
				<h2 class="text-lg font-bold">Etwas Gutes Tun:</h2>
				<p>
					Durch den besonderen Fokus auf gemeinnützige Organisationen wird ein Mehrwert für die
					Region geschaffen, der darüber hinaus eine äußerst motivierende Wirkung auf die
					Studierenden hat.
				</p>
			</div>
		</div>
	</div>
</div>

{#if playVideo}
	<div class="px-2 py-4 lg:py-6 mt-4">
		<div class="flex flex-col items-center mx-auto">
			<div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
				<iframe
					src="https://www.youtube.com/embed/ZK9tu6__fOM"
					frameborder="0"
					allowfullscreen
					class="absolute top-0 left-0 w-full h-full"
					title=""
				/>
			</div>
		</div>
	</div>
{:else}
	<div
		class="mt-4"
		on:click={() => {
			playVideo = !playVideo;
		}}
		on:keypress={() => {
			playVideo = !playVideo;
		}}
	>
		<img src="youtube-thumb.jpg" style="cursor:pointer" alt="" />
	</div>
{/if}

<div class="">
	<div class="grid grid-cols-1 lg:grid-cols-2 mt-4">
		<div class="relative h-64 overflow-hidden sm:h-12 lg:order-first lg:h-full">
			<img
				alt="Helfende Hände"
				src="helping-hands.jpg"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>

		<div class="pb-12 lg:py-28 px-3 lg:px-16">
			<h1 class="text-3xl font-semibold py-4 lg:py-0">Eure Organisation braucht Unterstützung?</h1>
			<h2 class="text-2xl">Wir helfen euch im Rahmen des Service Learning Projekts!</h2>
			<p class="mt-4 text-gray-600 dark:text-gray-300">
				Ihr seid ein gemeinnütziger Verein oder eine gemeinnützige Initiative, die vor einem Problem
				steht und könntet Unterstützung gebrauchen? Vielleicht können unsere Studierenden euch
				weiterhelfen!
			</p>
			<button class="btn btn-primary mt-6">Weitere Informationen & Onlinebewerbung</button>
		</div>
	</div>
</div>
<div class="">
	<div class="grid grid-cols-1 lg:grid-cols-2 mt-4">
		<div class="relative h-64 overflow-hidden sm:h-12 lg:order-last lg:h-full">
			<img
				alt="Helfende Hände"
				src="students-tablet.jpg"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>

		<div class="pb-12 lg:py-28 px-3 lg:px-16">
			<h1 class="text-3xl font-semibold py-4 lg:py-0">Soziales Engagement im Studium?</h1>
			<h2 class="text-2xl">Das geht! Service Learning @Uni Flensburg</h2>
			<p class="mt-4 text-gray-600 dark:text-gray-300">
				Als Studierende:r des M.A. IMS an der Europa-Universität Flensburg könnt ihr euch im Rahmen
				eures Curriculums engagieren, echte Praxiserfahrungen sammeln und dabei etwas Gutes tun.
				Erfahrt hier mehr über den Studiengang:
			</p>
			<button class="btn btn-primary mt-6">Zum Studiengang</button>
		</div>
	</div>
  </div>

<div class="px-4 pb-12 pt-12 mt-4 sm:px-6 lg:px-8 bg-base-200">
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
				<p class="text-sm text-gray-600 text-center px-5">
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
				<p class="text-sm text-gray-600 text-center px-5">
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
				<p class="text-sm text-gray-600 text-center px-5">
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
<div class="text-center text-4xl font-bold py-8">Umgesetzte Projekte</div>
<Projects limit={3} />
