<script>
	import { PUBLIC_CMS_URL } from '$env/static/public';
     /**
	 * @type {{ Avatar: { data: { attributes: { formats: { thumbnail: { url: any; }; }; }; }; }; name: any; Testimonial: any; Name: any; }}
	 */
      export let content;
</script>

<div
    class="relative w-full mx-auto rounded-tl-[50px] rounded-br-[50px] bg-white shadow-lg px-5 pt-5 mt-8 pb-10 text-gray-800"
    style="max-width: 500px"
>
    {#if content.Avatar.data}
        <div class="w-full pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img src="{PUBLIC_CMS_URL}{content.Avatar.data.attributes.formats.thumbnail.url}" alt="{content.name}" />
            </div>
        </div>
    {/if}
    <div class="w-full mb-16">
        <div class="text-3xl text-primary text-left leading-tight h-3">“</div>
        <p class="text-gray-600 text-center px-5">
            {content.Testimonial}
        </p>
        <div class="text-3xl text-primary text-right leading-tight h-3 -mt-3">”</div>
    </div>
    <div class="absolute bottom-8 right-8">
        <p class="text-md text-primary font-bold text-center">- {content.Name} -</p>
    </div>
</div>