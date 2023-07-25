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
<div 
    class="px-16 flex items-center border rounded w-1/3 text-gray-900 checked-{element.value}" 
    on:click={() => element.value = !element.value}
    on:keypress={() => element.value = !element.value}
    on:change={() => element.value = !element.value}
>
    <input 
        type="checkbox" 
        value="" 
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" hidden
        bind:checked={element.value}
    >
    <p class="ml-2 text-xl font-medium">{element.title}</p>
</div>

<style>
	.checked-true {
		background-color: #345;
        color: #fff;
	}
</style>