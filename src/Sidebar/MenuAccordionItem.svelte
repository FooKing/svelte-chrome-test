<!--Start Script-->
<script>
 export let menuTitle;
 export let component;
</script>

<!--Start HTML-->
<div class="tw-collapse tw-collapse-arrow">
	<input type="checkbox" class="peer" />
	<div class="tw-collapse-title">
		{menuTitle}
	</div>
	<div class="tw-collapse-content tw-text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
		<svelte:component this={component}></svelte:component>
	</div>
</div>

<!--Start Style-->
<style>
	.tw-collapse-title{
		border-top: hsl(var(--b2)) solid 2px;
		border-bottom: hsl(var(--b2)) solid 2px;
		font-size: 1rem;
		font-weight: bold;
		color: hsl(var(--bc));
	}
	.tw-collapse-content{
		margin-top:4px;
		color: hsl(var(--bc));
	}


</style>