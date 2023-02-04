<script>
		import TailwindStyle from "./TailwindStyle.svelte";
    import MenuNavbar from "./Menu/MenuNavbar.svelte";
    import MenuAccordionItem from "./Menu/MenuAccordionItem.svelte";
    import JsonMenuComp from "./Menu/2DJsonTools/JsonMenuComp.svelte";

		let theme = "light";

	// const executeDebugApiMethod = async (methodName) => {
	// 	const request = {
	// 		op: "execute_api_method",
	// 		methodName: methodName,
	// 		args: []
	// 	}
	//
	// 	const response = await chrome.runtime.sendMessage(request);
	// }

</script>
<html lang="en" data-theme={theme}>
	<div class="tw-content-sidebar">
		<MenuNavbar/>
		<MenuAccordionItem menuTitle="Bolt"/>
		<MenuAccordionItem menuTitle="2D Json" component={JsonMenuComp}/>
		<MenuAccordionItem menuTitle="Colours"/>
	</div>
</html>
<style>
	.tw-content-sidebar {
		background-color:hsl(var(--b1));
		border-radius: 5px;
		height: 70%;
		max-height: 700px;
		width: 400px;
		position: fixed;
		top: 15%;
		right: 0;
		z-index: 2147483647; /* the z-est index */
		overflow: auto;
	}
</style>
