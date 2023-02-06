<!--Start Script-->
<script>
	import ClipboardUtility from "../../UtilClasses/ClipboardUtility";

	export let titleName;
		let clipboardText ="";

	export function handleOnClick(){
		ClipboardUtility.readFromClipboard().then(clipboardText => {
			console.log(clipboardText);
		});
	}

</script>

<!--Start HTML-->
<div class="tw-entry">
    <button class="tw-btn tw-btn-sm tw-btn-primary" on:click={handleOnClick}>
        {titleName}
    </button>
</div>


<!--Start Style-->
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
