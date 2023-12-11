<script lang="ts" context="module">
	import { Client } from '$lib/client';
	
	let testimonials = (filter: String) => {
			return Client(
			`query {
				testimonials${filter} {
				data {
                    attributes {
                        Quote
                        Name
                      	Role
                      	FrontPage
                      	Projekt {
                          data {
                            id
                          }
                        }
                    }
				}
			}
		}`
		);
	}
</script>

<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';
    import { browser } from '$app/environment';

    import Truncate from '$lib/helper/truncate.svelte';
    import Carousel from 'svelte-carousel';

    export let project_id: number|null = null;
    export let frontpage: boolean = false;
    export let decorated: boolean = false;

	const filter: string[] = [];
    if (frontpage === true) filter.push('FrontPage: { eq: true }');
    if (project_id !== null) filter.push('Projekt: {id: {eq: ' + project_id + ' }}');
	let filterterString = (filter.length>0 ? '(filters: { '+filter.join(',')+'})' : '');
</script>


{#if browser}
<div class="text-white">
    {#await testimonials(filterterString)}
        <!-- TODO: Spinner -->
    {:then data}
        {#if data.testimonials.data.length > 0}

            <!-- Wave -->
            <svg
                class="bg-white"
                id="wave"
                style="transform:rotate(0deg);"
                viewBox="0 0 1440 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    style="transform:translate(0, 0px); opacity:1"
                    fill="#4472C4"
                    d="M0,52L120,60.7C240,69,480,87,720,78C960,69,1200,35,1440,36.8C1680,39,1920,78,2160,91C2400,104,2640,91,2880,78C3120,65,3360,52,3600,49.8C3840,48,4080,56,4320,58.5C4560,61,4800,56,5040,56.3C5280,56,5520,61,5760,52C6000,43,6240,22,6480,19.5C6720,17,6960,35,7200,47.7C7440,61,7680,69,7920,75.8C8160,82,8400,87,8640,73.7C8880,61,9120,30,9360,34.7C9600,39,9840,78,10080,97.5C10320,117,10560,117,10800,97.5C11040,78,11280,39,11520,23.8C11760,9,12000,17,12240,26C12480,35,12720,43,12960,41.2C13200,39,13440,26,13680,23.8C13920,22,14160,30,14400,41.2C14640,52,14880,65,15120,62.8C15360,61,15600,43,15840,39C16080,35,16320,43,16560,39C16800,35,17040,17,17160,8.7L17280,0L17280,130L17160,130C17040,130,16800,130,16560,130C16320,130,16080,130,15840,130C15600,130,15360,130,15120,130C14880,130,14640,130,14400,130C14160,130,13920,130,13680,130C13440,130,13200,130,12960,130C12720,130,12480,130,12240,130C12000,130,11760,130,11520,130C11280,130,11040,130,10800,130C10560,130,10320,130,10080,130C9840,130,9600,130,9360,130C9120,130,8880,130,8640,130C8400,130,8160,130,7920,130C7680,130,7440,130,7200,130C6960,130,6720,130,6480,130C6240,130,6000,130,5760,130C5520,130,5280,130,5040,130C4800,130,4560,130,4320,130C4080,130,3840,130,3600,130C3360,130,3120,130,2880,130C2640,130,2400,130,2160,130C1920,130,1680,130,1440,130C1200,130,960,130,720,130C480,130,240,130,120,130L0,130Z"
                /></svg
            >

            <section class="bg-[#4472C4]">
                <div class="container mx-auto p-5">
        
                    <Carousel 
                        let:showPrevPage
                        let:showNextPage
                    >
                    <button slot="prev" on:click={showPrevPage} class="btn btn-circle mt-auto mb-auto">❮</button>
                    {#each data.testimonials.data as testimonial, index}
                        <div class="p-5">
                            {#if testimonial.attributes.Quote}
                                <div class="text-2xl">"<Truncate text={testimonial.attributes.Quote} />"</div>
                            {/if}
                            {#if testimonial.attributes.Name}
                                <div><Truncate text={testimonial.attributes.Name} /></div>
                            {/if}                
                        </div>
                    {/each}
                    <button slot="next" on:click={showNextPage} class="btn btn-circle mt-auto mb-auto">❯</button>
                    </Carousel>

                </div>
            </section>

            <!-- Wave -->
            <svg
                class="bg-[#4472C4]"
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

            
        {/if}
    {/await}
</div>
{/if}
