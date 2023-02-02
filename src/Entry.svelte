<script>
    export let event;
    export let methodName;
    export let prettyName;
</script>

<div class="entry">
    <button on:click={() => event(methodName)}>
        {prettyName}
    </button>
</div>

<style>
    
</style>
