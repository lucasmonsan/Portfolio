<script>
	import { pageSwapDelay, pageSwapTimer } from '$lib/stores/globalStore';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<main in:fade={{ duration: $pageSwapTimer, delay: $pageSwapDelay, easing: cubicInOut }} out:fade={{ duration: $pageSwapTimer, easing: cubicInOut }}>
	<slot />
</main>

<style>
	main {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}
</style>

