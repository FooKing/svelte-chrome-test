<!-- Start Script-->
<script>
	import { writable } from 'svelte/store';
	export const feedbackMsg = writable('');
	let progressHidden = true;

	$: {
		feedbackMsg.subscribe(value => {
			console.log('feedbackMsg:', value);
		});
	}


</script>

<!--Start HTML-->
<div>
	{$feedbackMsg}
	<progress class="tw-progress tw-self-center tw-progress-primary" value="0" max="100" hidden={progressHidden} ></progress>
</div>


<!--Start Style-->
<style>
	div{
		display: flex;
		flex-direction: column;
		height: 8vh;
		overflow: auto;
	}
	progress{
		max-width: 90%;
		justify-self: flex-end;
		justify-items: flex-end;
	}


</style>