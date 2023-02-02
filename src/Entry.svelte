<script>
	import TailwindStyle from "./TailwindStyle.svelte";
    export let event;
    export let methodName;
    export let prettyName;
</script>

<div class="entry">
    <button class="btn btn-primary" on:click={() => event(methodName)}>
        {prettyName}
    </button>
</div>

<style>
    
</style>
