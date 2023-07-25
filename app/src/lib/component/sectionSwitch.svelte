<script>
    // @ts-nocheck

    import Selection from '$lib/component/element/form/selection.svelte';
    import Radio from '$lib/component/element/form/radio.svelte';
    import Textfield from '$lib/component/element/form/textfield.svelte';
    import Textarea from '$lib/component/element/form/textarea.svelte';
    import FileUpload from '$lib/component/element/form/fileupload.svelte';
	import { element, setContext } from 'svelte/internal';

    export let sect = {
        type: String,
        title: String,
        info: String,
        elements: [
            {
                title: String,
                description: String,
                length: String,
                type: String,
                value: (String||Boolean),
            }
        ],
    };

    const getRowType = (type) => {
        if(type == 'selection') {
            return 'flex flex-row h-48 place-content-center';
        } else if(type == 'textfield') {
            return 'grid grid-cols-1';
        } else if(type == 'fileupload') {
            return 'grid grid-cols-2';
        } else {
            return 'flex flex-row';
        }
    }

    setContext('RadioDeactivate', { deactivateRadioButtons });

    function deactivateRadioButtons() {
            sect.elements.forEach(el => {
                el.value = false;
            });
    }
</script>

{#if sect != null}
    {#if sect.title != String && sect.title != ''}
        <h2 class="px-4 pt-5 pb-5 text-3xl">{sect.title}</h2>
    {/if}
    <div class="{getRowType(sect.type)}">
        {#each sect.elements as element, i}
            {#if sect.type == 'selection'}
                {#if element.type == 'checkbox'}
                    <Selection {element}></Selection>
                {:else}
                    <Radio {element}></Radio>
                {/if}
            {:else if sect.type == 'textfield'}
                <Textfield {element}></Textfield>
            {:else if sect.type == 'textarea'}
                <Textarea {element}></Textarea>
            {:else if sect.type == 'fileupload'}
                <FileUpload {element}></FileUpload>
            {/if}
        {/each}
    </div>
    {#if sect.info != null}
        <p id="helper-checkbox-text" class="text-xs font-normal text-[#345] mb-5 mt-5">{sect.info}</p>
    {/if}
{/if}