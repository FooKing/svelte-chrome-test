<!--Start Script-->
<script>
		import TailwindStyle from "./TailwindStyle.svelte"; // This needs to stay in here to enable styles even though it is not used it has base's in here likely needs changing to stop css leaks.
    import MenuNavbar from "./Sidebar/MenuNavbar.svelte";
    import MenuAccordionItem from "./Sidebar/MenuAccordionItem.svelte";
    import JsonMenuComp from "./Sidebar/JsonTools/JsonMenuComp.svelte";
		import MenuToggleButton from "./Sidebar/MenuToggleButton.svelte";
		import ConsoleCommandsComp from "./Sidebar/ConsoleCommands/ConsoleCommandsComp.svelte";
		import ClipboardUtility from "./UtilClasses/ClipboardUtility";
		import UserFeebackSection from "./Sidebar/UserFeedbackSection.svelte";

		// Set theme for DaisyUI here, this can be changed at runtime, TODO - Select and set from options.
		let theme = "light";

		//Sidebar Vars
		let sidebarOpen = false;

		//Functions
		function toggleSidebar() {
			sidebarOpen = !sidebarOpen;
		}

		// Allow panel to be controlled with key presses. TODO - setup in options to allow different key binds
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
<div class="sidebarPanel {sidebarOpen ? 'open' : ''}" >
	<MenuNavbar handleNavbarSidebarClose={toggleSidebar} />
	<div class="mainContentContainer">
		<MenuAccordionItem menuTitle="Json Tools" component={JsonMenuComp}/>
		<MenuAccordionItem menuTitle="Console Commands" component={ConsoleCommandsComp}/>
		<MenuAccordionItem menuTitle="Bolt"/>
		<MenuAccordionItem menuTitle="Colours"/>
	</div>
	<UserFeebackSection class="userFeedbackSection" feedbackMsg=""/>
</div>

</html>


<!--Start Styles-->
<style>

	.sidebarPanel {
		display: flex;
		flex-direction: column;
		background-color: hsl(var(--b1));
		border-radius: 5px;
		max-height: 60vh;
		width: 400px;
		position: fixed;
		top: 15%;
		right: -400px;
		z-index: 2147483647;
		transition: right 0.3s ease-out;
		/*overscroll-behavior: contain;*/
		/*overflow-scrolling: unset;*/
	}

	.mainContentContainer{
		max-height: 50vh;
		overflow: auto;
	}

	.sidebarPanel.open {
		right: 0;
	}



</style>
