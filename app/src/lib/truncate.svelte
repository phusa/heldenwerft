<script lang="ts">
    export let text: String;
    export let length: number = 200;

    if (text.length > length) {
        text = text.slice(0, length) + ' ...';
    }
    
</script>


{text}