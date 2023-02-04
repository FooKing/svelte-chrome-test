<script>
    export let event;
    export let methodName;
    export let titleName;
</script>

<div class="tw-entry">
    <button class="tw-btn tw-btn-primary" on:click={() => event(methodName)}>
        {titleName}
    </button>
</div>

<style>

</style>
