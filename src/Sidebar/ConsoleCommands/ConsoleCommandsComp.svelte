<!--Start Scripts-->
<script>
	import MenuAccordionItem from "../MenuAccordionItem.svelte";
	import Tours from "./Tours.svelte";
	import FloorShapes from "./FloorShapes.svelte";

	const executeDebugApiMethod = async (methodName) => {
		const request = {
			op: "execute_api_method",
			methodName: methodName,
			args: []
		}

		const response = await chrome.runtime.sendMessage(request);
	}

</script>

<!--Start HTML Elements-->
<div>
	<MenuAccordionItem menuTitle="3D Tours" component={Tours}/>
	<MenuAccordionItem menuTitle="FloorShapes" component={FloorShapes}/>
	<MenuAccordionItem menuTitle="Room Profile"/>
	<MenuAccordionItem menuTitle="Other"/>


</div>


<!--Start Styles-->
<style>

	/*div{*/
	/*	text-align: center;*/
	/*	width: 350px;*/
	/*	margin: 0 auto;*/
	/*	border: hsl(var(--p)) solid 2px;*/
	/*	border-radius: 4px;*/
	/*	padding: 10px;*/
	/*	flex: 0 0 auto;*/
	/*	display: flex;*/
	/*	flex-direction: column;*/
	/*	justify-content: center;*/
	/*	align-items: center;*/
	/*}*/

</style>