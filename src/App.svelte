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

<div class="sidebar">
	<Entry prettyName="Outer" methodName="drawFloorOuterShapes" event={executeDebugApiMethod} />
	<Entry prettyName="Inner" methodName="drawFloorInnerShapes" event={executeDebugApiMethod} />
</div>

<style>
	.sidebar {
		background-color: aquamarine;
		height: 100%;
		width: 15%;
		position: fixed;
		top: 0px;
		right: 0px;
		z-index: 2147483647; /* the z-est index */
	}
</style>
