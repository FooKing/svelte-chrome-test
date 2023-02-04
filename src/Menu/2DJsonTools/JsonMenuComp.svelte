<script>
	import JsonBtnComp from "./JsonBtnComp.svelte";
	const executeDebugApiMethod = async (methodName) => {
		const request = {
			op: "execute_api_method",
			methodName: methodName,
			args: []
		}

		const response = await chrome.runtime.sendMessage(request);
	}
</script>



<JsonBtnComp titleName="Outer" methodName="drawFloorOuterShapes" event={executeDebugApiMethod} />
<JsonBtnComp titleName="Inner" methodName="drawFloorOuterShapes" event={executeDebugApiMethod} />