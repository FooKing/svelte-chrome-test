/* TailwindStyle.svelte */
<style global>

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	*::-webkit-scrollbar {
		width: 15px;
	}

	*::-webkit-scrollbar-track {
		background: hsl(var(--b2));
		border-radius: 2px;
	}

	*::-webkit-scrollbar-thumb {
		background-color:  hsl(var(--b3));
		border-radius: 2px;
		border: 2px solid  hsl(var(--b3));
	}

</style>