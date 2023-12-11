<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_CMS_URL } from '$env/static/public';
	import SvelteMarkdown from 'svelte-markdown';
	import Projects from '$lib/component/projects.svelte';	
	import Testimonials from '$lib/component/testimonials.svelte';
	export let data: PageData;

	let project: { id: any; Name: any; Summary: any; Teaser: { data: { attributes: { formats: { large: { url: any; }; }; }; }; }; Semester: { data: { attributes: { Semester: any; }; }; }; Students: any; Category: { data: { attributes: { Category: any; }; }; }; Description: any; Media: { data: any; }; } | null  = null

	if (data.projects.data[0]) {
		project = data.projects.data[0].attributes;
		if (project) project.id = data.projects.data[0].id;
	}
	
</script>

{#if project}
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-56 px-4 lg:px-16 items-center mt-12">
		<div class="lg:px-16">
			<h1 class="text-3xl font-bold sm:text-4xl text-white">
				{project.Name}
			</h1>

			<p class="mt-4 text-gray-900 font-bold">
				{project.Summary}
			</p>
		</div>
		{#if project.Teaser.data}
		<img
			class="h-auto max-w-md rounded-3xl shadow-2xl"
			src="{PUBLIC_CMS_URL}{project.Teaser.data.attributes.formats.large.url}"
			alt=""
		/>
		{/if}
	</div>
	<div>
		<svg id="wave" viewBox="0 0 1240 180" version="1.1" xmlns="http://www.w3.org/2000/svg"
			><path
				style="transform:translate(-640px, 0);"
				fill="#6DD9FF"
				d="M0,84L60,91C120,98,240,112,360,105C480,98,600,70,720,70C840,70,960,98,1080,98C1200,98,1320,70,1440,49C1560,28,1680,14,1800,28C1920,42,2040,84,2160,105C2280,126,2400,126,2520,108.5C2640,91,2760,56,2880,56C3000,56,3120,91,3240,91C3360,91,3480,56,3600,38.5C3720,21,3840,21,3960,49C4080,77,4200,133,4320,136.5C4440,140,4560,91,4680,59.5C4800,28,4920,14,5040,28C5160,42,5280,84,5400,108.5C5520,133,5640,140,5760,119C5880,98,6000,49,6120,56C6240,63,6360,126,6480,150.5C6600,175,6720,161,6840,133C6960,105,7080,63,7200,56C7320,49,7440,77,7560,77C7680,77,7800,49,7920,35C8040,21,8160,21,8280,17.5C8400,14,8520,7,8580,3.5L8640,0L8640,210L8580,210C8520,210,8400,210,8280,210C8160,210,8040,210,7920,210C7800,210,7680,210,7560,210C7440,210,7320,210,7200,210C7080,210,6960,210,6840,210C6720,210,6600,210,6480,210C6360,210,6240,210,6120,210C6000,210,5880,210,5760,210C5640,210,5520,210,5400,210C5280,210,5160,210,5040,210C4920,210,4800,210,4680,210C4560,210,4440,210,4320,210C4200,210,4080,210,3960,210C3840,210,3720,210,3600,210C3480,210,3360,210,3240,210C3120,210,3000,210,2880,210C2760,210,2640,210,2520,210C2400,210,2280,210,2160,210C2040,210,1920,210,1800,210C1680,210,1560,210,1440,210C1320,210,1200,210,1080,210C960,210,840,210,720,210C600,210,480,210,360,210C240,210,120,210,60,210L0,210Z"
			/><path
				style="transform:translate(-120px, 50px);"
				fill="#4472C4"
				d="M0,21L60,35C120,49,240,77,360,80.5C480,84,600,63,720,49C840,35,960,28,1080,42C1200,56,1320,91,1440,98C1560,105,1680,84,1800,91C1920,98,2040,133,2160,136.5C2280,140,2400,112,2520,115.5C2640,119,2760,154,2880,157.5C3000,161,3120,133,3240,122.5C3360,112,3480,119,3600,101.5C3720,84,3840,42,3960,42C4080,42,4200,84,4320,105C4440,126,4560,126,4680,133C4800,140,4920,154,5040,157.5C5160,161,5280,154,5400,157.5C5520,161,5640,175,5760,150.5C5880,126,6000,63,6120,56C6240,49,6360,98,6480,101.5C6600,105,6720,63,6840,52.5C6960,42,7080,63,7200,84C7320,105,7440,126,7560,140C7680,154,7800,161,7920,140C8040,119,8160,70,8280,63C8400,56,8520,91,8580,108.5L8640,126L8640,210L8580,210C8520,210,8400,210,8280,210C8160,210,8040,210,7920,210C7800,210,7680,210,7560,210C7440,210,7320,210,7200,210C7080,210,6960,210,6840,210C6720,210,6600,210,6480,210C6360,210,6240,210,6120,210C6000,210,5880,210,5760,210C5640,210,5520,210,5400,210C5280,210,5160,210,5040,210C4920,210,4800,210,4680,210C4560,210,4440,210,4320,210C4200,210,4080,210,3960,210C3840,210,3720,210,3600,210C3480,210,3360,210,3240,210C3120,210,3000,210,2880,210C2760,210,2640,210,2520,210C2400,210,2280,210,2160,210C2040,210,1920,210,1800,210C1680,210,1560,210,1440,210C1320,210,1200,210,1080,210C960,210,840,210,720,210C600,210,480,210,360,210C240,210,120,210,60,210L0,210Z"
			/></svg
		>
		<div class="bg-[#4472C4]">
			<div class="bg-[#4472C4] px-4 lg:px-16">
				<div class="grid gap-8 row-gap-5 lg:grid-cols-3">
					<div class="overflow-hidden">
						<div
							class="relative p-5 rounded-sm transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl"
						>
							<div class="flex flex-col mb-2 lg:items-center lg:flex-row">
								<div
									class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full lg:mb-0"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#6DD9FF"
										class="w-10 h-10"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
										/>
									</svg>
								</div>
								{#if project.Semester.data}
								<h1 class="font-semibold leading-5 text-3xl text-white">
									{project.Semester.data.attributes.Semester}
								</h1>
								{/if}
							</div>
						</div>
					</div>
					<div class="overflow-hidden">
						<div
							class="relative p-5 rounded-sm transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl"
						>
							<div class="flex flex-col mb-2 lg:items-center lg:flex-row">
								<div
									class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full lg:mb-0"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#6DD9FF"
										class="w-10 h-10"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
										/>
									</svg>
								</div>
								<h1 class="font-semibold leading-5 text-3xl text-white">
									{project.Students} Studierende
								</h1>
							</div>
						</div>
					</div>
					<div class="overflow-hidden">
						<div
							class="relative p-5 rounded-sm transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl"
						>
							<div class="flex flex-col mb-2 lg:items-center lg:flex-row">
								<div
									class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full lg:mb-0"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#6DD9FF"
										class="w-10 h-10"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
										/>
									</svg>
								</div>
								{#if project.Category.data}
								<h1 class="font-semibold leading-5 text-3xl text-white">
									{project.Category.data.attributes.Category}
								</h1>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<svg
		class="bg-[#4472C4]"
		id="wave"
		style="transform:rotate(0deg);"
		viewBox="0 0 1440 90"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		><path
			style="transform:translate(0, 0px);"
			fill="#FFFFFF"
			d="M0,90L80,81.7C160,73,320,57,480,53.3C640,50,800,60,960,61.7C1120,63,1280,57,1440,55C1600,53,1760,57,1920,48.3C2080,40,2240,20,2400,21.7C2560,23,2720,47,2880,48.3C3040,50,3200,30,3360,25C3520,20,3680,30,3840,31.7C4000,33,4160,27,4320,20C4480,13,4640,7,4800,15C4960,23,5120,47,5280,51.7C5440,57,5600,43,5760,46.7C5920,50,6080,70,6240,78.3C6400,87,6560,83,6720,68.3C6880,53,7040,27,7200,26.7C7360,27,7520,53,7680,61.7C7840,70,8000,60,8160,56.7C8320,53,8480,57,8640,50C8800,43,8960,27,9120,21.7C9280,17,9440,23,9600,25C9760,27,9920,23,10080,18.3C10240,13,10400,7,10560,10C10720,13,10880,27,11040,31.7C11200,37,11360,33,11440,31.7L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
		/></svg
	>

	<div class="px-4 lg:px-24 bg-white">
		<div class="pt-16">
			<h1 class="text-3xl font-semibold py-4 text-[#009CF3]">Nähere Informationen zum Projekt</h1>
			<h2 class="text-xl">
				{#if project.Description}
					<SvelteMarkdown source={project.Description} />
				{/if}
			</h2>
		</div>
	</div>

	<div class="px-4 lg:px-6 xl:px-20 bg-white pt-16">
		<div class="pt-4">
			{#if project.Media.data}
				<div class="carousel bg-white">
					{#each project.Media.data as pic}
						<div class="carousel-item h-full">
							<label for="pic-modal-{pic.id}"
								><img
									src="{PUBLIC_CMS_URL}{pic.attributes.formats.small.url}"
									alt=""
									class="max-h-60 mr-3"
								/></label
							>
						</div>
						<input type="checkbox" id="pic-modal-{pic.id}" class="modal-toggle" />
						<label for="pic-modal-{pic.id}" class="modal cursor-pointer">
							<label class="modal-box w-11/12 max-w-5xl bg-white" for="">
								<img src="{PUBLIC_CMS_URL}{pic.attributes.url}" alt="" />
							</label>
						</label>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<Testimonials project_id={project.id} />

	<!-- {#if project.Organisations.data}
		<div class=" bg-slate-100 mt-20 p-5 justify-center">
			{#each project.Organisations.data as organisation}
				<div class="card card-side">
					{#if organisation.attributes.Logo}
						<figure class="">
							<img
								src="{PUBLIC_CMS_URL}{organisation.attributes.Logo.data.attributes.formats.thumbnail
									.url}"
								alt=""
								class="shadow-lg rounded-full max-w-full h-auto aspect-square align-middle border-4 border-primary"
							/>
						</figure>
					{/if}
					<div class="card-body w-1/2">
						<h2 class="text-xl font-bold">Unterstützte Organisation</h2>
						<p>
							<span class="font-bold">{organisation.attributes.Name}</span> -
							{organisation.attributes.Description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/if} -->

	<div class="px-4 py-8 sm:py-12 lg:px-6 xl:px-20 bg-white">
		<h1 class="text-4xl font-bold text-[#009CF3] pb-4">Weitere Projekte</h1>
		<Projects limit={3} />
	</div>
{:else}
	<h1>Projekt nicht gefunden</h1>
{/if}
