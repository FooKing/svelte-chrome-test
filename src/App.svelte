<script>
    import Entry from "./Entry.svelte";


	const executeDebugApiMethod = async (methodName) => {
		const request = {
			op: "execute_api_method",
			methodName: methodName,
			args: []
		}

		const response = await chrome.runtime.sendMessage(request);
	}

</script>
<div class="contentS-sidebar">
	<Entry prettyName="Outer" methodName="drawFloorOuterShapes" event={executeDebugApiMethod} />
	<Entry prettyName="Inner" methodName="drawFloorInnerShapes" event={executeDebugApiMethod} />
</div>

<style>
	.contentS-sidebar {
		background-color: brown;
		height: 700px;
		width: 400px;
		position: fixed;
		top: 15%;
		right: 0px;
		z-index: 2147483647; /* the z-est index */
	}
</style>
