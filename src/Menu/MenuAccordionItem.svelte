<!--Start Script-->
<script>
 export let menuTitle;
 export let component;
</script>

<!--Start HTML-->
<div class="tw-collapse tw-collapse-arrow">
	<input type="checkbox" class="peer" />
	<div class="tw-collapse-title  peer-checked:bg-secondary peer-checked:text-secondary-content">
		{menuTitle}
	</div>
	<div class="tw-collapse-content tw-text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
		<svelte:component this={component}></svelte:component>
	</div>
</div>

<!--Start Style-->
<style>
	.tw-collapse
	{
		border-bottom: hsl(var(--b2)) solid 2px;
		color: hsl(var(--pc));
		font-size: large;
		font-weight: bold;
	}
	.tw-collapse:hover{
		border-bottom: hsl(var(--a)) solid 2px;
	}
	.tw-collapse:active{
		border-bottom: hsl(var(--a)) solid 2px;
	}

</style>