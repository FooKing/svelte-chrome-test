<!--Start Script-->
<script>
		import TailwindStyle from "./TailwindStyle.svelte"; // This needs to stay in here to enable styles even though it is not used it has base's in here likely needs changing to stop css leaks.
    import MenuNavbar from "./Menu/MenuNavbar.svelte";
    import MenuAccordionItem from "./Menu/MenuAccordionItem.svelte";
    import JsonMenuComp from "./Menu/2DJsonTools/JsonMenuComp.svelte";
		import MenuToggleButton from "./Menu/MenuToggleButton.svelte";

		// Set theme for DaisyUI here, this can be changed at runtime, future allow change in options.
		let theme = "light";

		//Sidebar Vars
		let sidebarOpen = false;


		//Functions
		function toggleSidebar() {
			sidebarOpen = !sidebarOpen;
		}
		window.addEventListener("keydown", (event) => {
			if (event.shiftKey && event.code === "KeyQ") {
				toggleSidebar();
			}
		});


</script>

<!--Start HTML apply theme changed from var above-->
<html lang="en" data-theme={theme}>

<!--Fixed position button to allow -->
<MenuToggleButton handleNavbarSidebarClose={toggleSidebar}/>

<!--Sidebar contents-->
<div class="tw-content-sidebar {sidebarOpen ? 'open' : ''}" >
		<MenuNavbar handleNavbarSidebarClose={toggleSidebar} />
		<MenuAccordionItem menuTitle="Bolt"/>
		<MenuAccordionItem menuTitle="2D Json" component={JsonMenuComp}/>
		<MenuAccordionItem menuTitle="Colours"/>
</div>

</html>


<!--Start Styles-->
<style>
	.tw-content-sidebar {
		background-color: hsl(var(--b1));
		border-radius: 5px;
		height: 70%;
		max-height: 700px;
		width: 400px;
		position: fixed;
		top: 15%;
		right: -400px;
		z-index: 2147483647;
		overflow: auto;
		transition: right 0.3s ease-out;
		overscroll-behavior: contain;
		overflow-scrolling: unset;
	}
	.tw-content-sidebar.open {
		right: 0;
	}

</style>
