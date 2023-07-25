<script>
    // @ts-nocheck

    export let element = 
    {
        title: String,
        type: String,
        required: Boolean,
        error: String,
        value: (String||Boolean),
    };

    function typeAction(node) {
        node.type = element.type;
    }

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
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">{element.title}</label>
    <input 
    use:typeAction
    id="default-input" 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    bind:value={element.value}
    on:change={onChange}
    >
    {#key unique}
        {#if element.error != ''}
            <p id="helper-checkbox-text" class="text-xs font-normal text-red-500">{element.error}</p>
        {/if}
    {/key}
</div>