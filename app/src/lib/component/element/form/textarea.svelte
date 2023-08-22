<script>
    // @ts-nocheck

    export let element = 
    {
        title: String,
        type: String,
        value: (String||Boolean),
    };

    function onChange() {
        element.error = '';
        restart();
    }

    let unique = {} // every {} is unique, {} === {} evaluates to false, is used to hide errors when not needed anymore

	function restart() {
		unique = {}
	}
</script>
<div class="grow p-4">
    <label for="message" class="block text-sm font-medium text-gray-900">{element.title}</label>
    <textarea
        id="message" 
        rows="4" 
        class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl"
        bind:value={element.value}
        on:change={onChange}
    ></textarea>
    {#key unique}
        {#if element.error != ''}
            <p id="helper-checkbox-text" class="text-xs font-normal text-red-500">{element.error}</p>
        {/if}
    {/key}
</div>