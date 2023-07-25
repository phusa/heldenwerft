<script>
    // @ts-nocheck

    import { getContext } from 'svelte';
    const { deactivateRadioButtons } = getContext('RadioDeactivate');

    export let element = 
    {
        title: String,
        type: String,
        group: String,
        value: (String||Boolean),
    };

    function onChange(e) {
        deactivateRadioButtons();
        element.value = e.currentTarget.checked;
    }

    function onChange2() {
        deactivateRadioButtons();
        element.value = true;
    }
</script>
<div 
    class="px-4 flex items-center border rounded w-1/3 text-gray-900 checked-{element.value}" 
    on:click={onChange2}
    on:keypress={onChange2}
    on:change={onChange2}
>
    <input 
        id="default-checkbox" 
        type="radio"
        name="{element.group}"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        bind:value={element.value}
        on:change={onChange}
    >
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">{element.title}</label>
</div>

<style>
	.checked-true {
		background-color: #345;
        color: #fff;
	}
</style>