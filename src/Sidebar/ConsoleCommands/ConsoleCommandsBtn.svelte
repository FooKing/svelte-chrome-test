<script>
    export let event;
    export let methodName;
    export let titleName;



</script>

<div class="tw-entry">
    <button class="tw-btn tw-btn-sm  tw-btn-primary" on:click={() => event(methodName)}>
        {titleName}
    </button>
</div>

<style>
	div{
		margin-bottom: 10px;
		width: 100%;
		text-align: center;
	}
	button{
		width: 100%;
	}

</style>
