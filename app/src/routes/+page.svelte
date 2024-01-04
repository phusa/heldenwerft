<script lang="ts">
	import Projects from '$lib/component/projects.svelte';
	import Testimonials from '$lib/component/testimonials.svelte';
	let playVideo = false;
</script>

<!-- Hero -->
<section class="bg-sky-500">
	<div class="container mx-auto">
		<div class="flex items-end ml-4 mr-4 pt-12 pb-12">
			<div class="lg:basis-3/6">
				<h1 class="text-3xl lg:text-4xl text-white">
					Service Learning:<br />
					Lernen durch Engagement
				</h1>
				<p class="mt-4 text-xl ">
					„Service Learning“ verbindet universitäres Lernen mit organisationaler Praxiserfahrung und
					gesellschaftlichem Engagement.
				</p>
				<p class="mt-4">
					Im Rahmen der Veranstaltung entwickeln Studierende des M.A. International Management
					Studies – BWL der Europa-Universität Flensburg Lösungsansätze für konkrete Probleme und
					Herausforderungen kleinerer gemeinnütziger Organisationen, um diese – in enger Abstimmung
					mit den verschiedenen Organisationen – selber umzusetzen.
				</p>
				<p class="mt-4">
					Wie das geht, wie ihr euch als Organisation um Unterstützung bewerben oder als
					Studierender teilnehmen könnt & welche Projekte wir bereits umgesetzt haben, erfahrt ihr
					auf diesen Seiten!
				</p>
				<div class="mt-4">
					<button class="btn rounded-full bg-sky-300 border-none hover:text-white">Für Studierende</button>
					<button class="btn rounded-full bg-sky-300 border-none hover:text-white">Für Organsiationen</button>
				</div>
			</div>
			<div class="basis-1/6 lg:visible invisible"></div>
			<div class="basis-2/6 lg:visible invisible">
				<div class="-mb-28">
					<img src="boat.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Wave -->
<div class="md:-mt-4 lg:-mt-12 bg-sky-500">
	<svg id="wave" viewBox="0 0 1240 190" version="1.1" xmlns="http://www.w3.org/2000/svg"
		><path
			style="transform:translate(-640px, 0);"
			fill="#7dd3fc"
			d="M0,84L60,91C120,98,240,112,360,105C480,98,600,70,720,70C840,70,960,98,1080,98C1200,98,1320,70,1440,49C1560,28,1680,14,1800,28C1920,42,2040,84,2160,105C2280,126,2400,126,2520,108.5C2640,91,2760,56,2880,56C3000,56,3120,91,3240,91C3360,91,3480,56,3600,38.5C3720,21,3840,21,3960,49C4080,77,4200,133,4320,136.5C4440,140,4560,91,4680,59.5C4800,28,4920,14,5040,28C5160,42,5280,84,5400,108.5C5520,133,5640,140,5760,119C5880,98,6000,49,6120,56C6240,63,6360,126,6480,150.5C6600,175,6720,161,6840,133C6960,105,7080,63,7200,56C7320,49,7440,77,7560,77C7680,77,7800,49,7920,35C8040,21,8160,21,8280,17.5C8400,14,8520,7,8580,3.5L8640,0L8640,210L8580,210C8520,210,8400,210,8280,210C8160,210,8040,210,7920,210C7800,210,7680,210,7560,210C7440,210,7320,210,7200,210C7080,210,6960,210,6840,210C6720,210,6600,210,6480,210C6360,210,6240,210,6120,210C6000,210,5880,210,5760,210C5640,210,5520,210,5400,210C5280,210,5160,210,5040,210C4920,210,4800,210,4680,210C4560,210,4440,210,4320,210C4200,210,4080,210,3960,210C3840,210,3720,210,3600,210C3480,210,3360,210,3240,210C3120,210,3000,210,2880,210C2760,210,2640,210,2520,210C2400,210,2280,210,2160,210C2040,210,1920,210,1800,210C1680,210,1560,210,1440,210C1320,210,1200,210,1080,210C960,210,840,210,720,210C600,210,480,210,360,210C240,210,120,210,60,210L0,210Z"
		/><path
			style="transform:translate(-120px, 50px);"
			fill="#0c4a6e"
			d="M0,21L60,35C120,49,240,77,360,80.5C480,84,600,63,720,49C840,35,960,28,1080,42C1200,56,1320,91,1440,98C1560,105,1680,84,1800,91C1920,98,2040,133,2160,136.5C2280,140,2400,112,2520,115.5C2640,119,2760,154,2880,157.5C3000,161,3120,133,3240,122.5C3360,112,3480,119,3600,101.5C3720,84,3840,42,3960,42C4080,42,4200,84,4320,105C4440,126,4560,126,4680,133C4800,140,4920,154,5040,157.5C5160,161,5280,154,5400,157.5C5520,161,5640,175,5760,150.5C5880,126,6000,63,6120,56C6240,49,6360,98,6480,101.5C6600,105,6720,63,6840,52.5C6960,42,7080,63,7200,84C7320,105,7440,126,7560,140C7680,154,7800,161,7920,140C8040,119,8160,70,8280,63C8400,56,8520,91,8580,108.5L8640,126L8640,210L8580,210C8520,210,8400,210,8280,210C8160,210,8040,210,7920,210C7800,210,7680,210,7560,210C7440,210,7320,210,7200,210C7080,210,6960,210,6840,210C6720,210,6600,210,6480,210C6360,210,6240,210,6120,210C6000,210,5880,210,5760,210C5640,210,5520,210,5400,210C5280,210,5160,210,5040,210C4920,210,4800,210,4680,210C4560,210,4440,210,4320,210C4200,210,4080,210,3960,210C3840,210,3720,210,3600,210C3480,210,3360,210,3240,210C3120,210,3000,210,2880,210C2760,210,2640,210,2520,210C2400,210,2280,210,2160,210C2040,210,1920,210,1800,210C1680,210,1560,210,1440,210C1320,210,1200,210,1080,210C960,210,840,210,720,210C600,210,480,210,360,210C240,210,120,210,60,210L0,210Z"
		/></svg
	>
</div>

<section class="bg-sky-900 text-white">
	<div class="container mx-auto">
		<div class="lg:flex">
			<div class="basis-1/3">
				<div class="p-5 duration-300 transform hover:scale-105">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#7dd3fc"
							class="w-10 h-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
							/>
						</svg>
						<h1 class="font-bold text-3xl pl-4">Lernen durch Engagement</h1>
					</div>
					<p class="pt-4">
						Die Studierenden engagieren sich im Rahmen einer Lehrveranstaltung in gemeinnützigen
						Organisationen und wenden ihr Wissen an, um eine Lösung für ein konkretes Problem zu
						erarbeiten und umzusetzen.
					</p>
				</div>
			</div>
			<div class="basis-1/3">
				<div class="p-5 duration-300 transform hover:scale-105">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#7dd3fc"
							class="w-10 h-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							/>
						</svg>
						<h1 class="font-bold text-3xl pl-4">Einzigartige Projekte</h1>
					</div>
					<p class="pt-4">
						Die Projekte, die von den Studierenden umgesetzt werden, können ganz verschiedener Natur
						sein. Unsere Schwerpunkte sind: Marketing & Reichweite, Strategie & Organisation oder
						Finanzierung & Fundraising.
					</p>
				</div>
			</div>
			<div class="basis-1/3">
				<div class="p-5 duration-300 transform hover:scale-105">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#7dd3fc"
							class="w-10 h-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
						<h1 class="font-bold text-3xl pl-4">Etwas Gutes tun</h1>
					</div>
					<p class="pt-4">
						Durch den besonderen Fokus auf gemeinnützige Organisationen können unsere Studierenden
						sich im Rahmen ihres Studiums gesellschaftlich engagieren &ndash; und schaffen damit
						einen echten Mehrwert für die Region.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Wave -->
<svg
	class="bg-sky-900"
	id="wave"
	style="transform:rotate(deg);"
	viewBox="0 0 1440 85"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	><path
		style="transform:translate(0px, -10px);"
		fill="#FFFFFF"
		d="M0,90L80,81.7C160,73,320,57,480,53.3C640,50,800,60,960,61.7C1120,63,1280,57,1440,55C1600,53,1760,57,1920,48.3C2080,40,2240,20,2400,21.7C2560,23,2720,47,2880,48.3C3040,50,3200,30,3360,25C3520,20,3680,30,3840,31.7C4000,33,4160,27,4320,20C4480,13,4640,7,4800,15C4960,23,5120,47,5280,51.7C5440,57,5600,43,5760,46.7C5920,50,6080,70,6240,78.3C6400,87,6560,83,6720,68.3C6880,53,7040,27,7200,26.7C7360,27,7520,53,7680,61.7C7840,70,8000,60,8160,56.7C8320,53,8480,57,8640,50C8800,43,8960,27,9120,21.7C9280,17,9440,23,9600,25C9760,27,9920,23,10080,18.3C10240,13,10400,7,10560,10C10720,13,10880,27,11040,31.7C11200,37,11360,33,11440,31.7L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
	/></svg
>

<section class="container mx-auto md:flex p-5">
	<div class="basis-1/3 hidden md:inline-block">
		<img alt="Sailor" src="sailor.png" class="" />
	</div>

	<div class="basis-2/3">
		<h1 class="text-4xl font-bold text-sky-900">Unterstützung für eure Organisation?</h1>
		<p class="mt-4 mb-4 text-xl">Bekommt ihr von fleißigen Studierendenteams!</p>
		<p>
			Wir helfen gemeinnützigen oder sozialen Organisationen, Vereinen & Initiativen im Rahmen
			unseres Service Learning Projektes.
		</p>
		<p class="mt-2">
			Unsere Studierenden unterstützen euch für die Dauer eines Semesters bei eurer individuellen
			Problemstellung.
		</p>
		<p class="mt-2">
			Wie das genau funktioniert, ob ihr mitmachen könnt & wie ihr euch für die Teilnahme am Service
			Learning Projekt bewerbt, erfahrt ihr bei Klick auf den folgenden Button!
		</p>
		<button
			class="btn bg-sky-900 mt-6 rounded-full text-white border-none btn-wide text-xl capitalize"
			>Mehr erfahren!</button
		>
	</div>
</section>

<!-- Wave -->
<svg
	class="bg-white"
	id="wave"
	style="transform:rotate(0deg);"
	viewBox="0 0 1440 85"
	xmlns="http://www.w3.org/2000/svg"
	><path
		style="transform:translate(0, -10px);"
		fill="#e2e8f0"
		d="M0,60L80,55C160,50,320,40,480,36.7C640,33,800,37,960,33.3C1120,30,1280,20,1440,13.3C1600,7,1760,3,1920,8.3C2080,13,2240,27,2400,33.3C2560,40,2720,40,2880,33.3C3040,27,3200,13,3360,6.7C3520,0,3680,0,3840,1.7C4000,3,4160,7,4320,21.7C4480,37,4640,63,4800,71.7C4960,80,5120,70,5280,55C5440,40,5600,20,5760,20C5920,20,6080,40,6240,46.7C6400,53,6560,47,6720,43.3C6880,40,7040,40,7200,46.7C7360,53,7520,67,7680,70C7840,73,8000,67,8160,65C8320,63,8480,67,8640,61.7C8800,57,8960,43,9120,46.7C9280,50,9440,70,9600,75C9760,80,9920,70,10080,70C10240,70,10400,80,10560,78.3C10720,77,10880,63,11040,60C11200,57,11360,63,11440,66.7L11520,70L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
	/></svg
>

<section class="bg-slate-200">
	<div class="container mx-auto md:flex p-5">
		<div class="basis-2/3">
			<h1 class="text-4xl font-bold text-sky-900">
				Soziales Engagement und Praxiserfahrung im Studium?
			</h1>
			<p class="mt-4 mb-4 text-xl">Bekommt ihr im Service Learning Projekt!</p>
			<p>
				Durch die Mitarbeit im Service Learning Projekt werdet ihr selbst zu Helden: ihr seid
				genau da, wo eure Hilfe gebraucht wird!
			</p>
			<p class="mt-2">
				Unterstützt gemeinnützige Organisationen und sammelt dabei Praxiserfahrung in relevanten
				Bereichen – noch während eures Studiums & natürlich auch als Teil eurer Studienleistung.
			</p>
			<p class="mt-2">
				Welche Projekte wir bisher umgesetzt haben, was ihr lernt und wie ihr mitmachen könnt,
				erfahrt ihr bei Klick auf den folgenden Button!
			</p>
			<button
				class="btn bg-sky-900 mt-6 rounded-full text-white border-none btn-wide text-xl capitalize"
				>Mehr erfahren!</button
			>
		</div>
		<div class="basis-1/3 hidden md:inline-block">
			<img alt="" src="threestudents.png" />
		</div>
	</div>
</section>

<!-- Wave -->
<svg
	class="bg-slate-200"
	id="wave"
	style="transform:rotate(0deg);"
	viewBox="0 0 1440 95"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	><path
		style="transform:translate(0, 0px);"
		fill="#FFFFFF"
		d="M0,90L80,81.7C160,73,320,57,480,53.3C640,50,800,60,960,61.7C1120,63,1280,57,1440,55C1600,53,1760,57,1920,48.3C2080,40,2240,20,2400,21.7C2560,23,2720,47,2880,48.3C3040,50,3200,30,3360,25C3520,20,3680,30,3840,31.7C4000,33,4160,27,4320,20C4480,13,4640,7,4800,15C4960,23,5120,47,5280,51.7C5440,57,5600,43,5760,46.7C5920,50,6080,70,6240,78.3C6400,87,6560,83,6720,68.3C6880,53,7040,27,7200,26.7C7360,27,7520,53,7680,61.7C7840,70,8000,60,8160,56.7C8320,53,8480,57,8640,50C8800,43,8960,27,9120,21.7C9280,17,9440,23,9600,25C9760,27,9920,23,10080,18.3C10240,13,10400,7,10560,10C10720,13,10880,27,11040,31.7C11200,37,11360,33,11440,31.7L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
	/></svg
>

<section class="container mx-auto p-5">
  <h1 class="text-4xl font-bold text-sky-900 pt-4 pb-2">Land in Sicht</h1>
	<h2 class="text-xl pb-8">
		Das Service Learning Projekt im Kurzvideo
	</h2>
	<div>
		{#if playVideo}
			<iframe
				src="https://www.youtube.com/embed/ZK9tu6__fOM"
				frameborder="0"
				allowfullscreen
				class=""
				title=""
			/>
		{:else}
			<div
				class=""
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
	</div>
</section>

<Testimonials frontpage={true} />

<section class="container mx-auto p-5">
	<h1 class="text-4xl font-bold text-sky-900 pt-4 pb-2">Bisher umgesetzte Projekte</h1>
	<h2 class="text-xl pb-8">
		Ihr braucht ein wenig Inspiration? Hier findet ihr eine Auswahl von Projekten, die wir bisher
		schon umgesetzt haben.
	</h2>
	<Projects limit={3} />
	<div class="flex justify-center">
		<a
			href="/project/"
			class="btn bg-sky-900 mt-12 rounded-full text-white border-none w-7/12 normal-case h-16 text-3xl"
		>
			<button>Alle ansehen!</button></a
		>
	</div>
</section>
