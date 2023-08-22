<script>
    // @ts-nocheck

    export let element = 
    {
        title: String,
        length: String,
        type: String,
        value: (String||Boolean),
    };
    
</script>

<!-- NUR EINE AUSWÄHLBAR MACHEN -->

<div class="rounded-xl border-4 border-gray-100 hoverMouse" id="checkboxx"
  on:click={() => element.value = !element.value}
  on:keypress={() => element.value = !element.value}
  on:change={() => element.value = !element.value}
>
  <span class="float-right m-2 tooltip" data-tip="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  </span> 
  <div class="rounded-xl bg-white items-center p-4 sm:p-6 lg:p-8 checked-{element.value}">
    <h3 class="font-medium sm:text-2xl">
      {element.title}
    </h3>
  </div>
</div>

<style>
	.checked-true {
    outline: 4px solid #00395b;
	}
    .hoverMouse {
        cursor: pointer;
    }
</style>