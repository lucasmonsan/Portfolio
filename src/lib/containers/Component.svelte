<script>
	import { observer } from '$lib/functions/observer';

	export let height = 'auto';
	export let bgColor = 'var(--color-1)';
	let visible = false;
</script>

<section use:observer on:enterViewport={() => (visible = true)} on:exitViewport={() => (visible = false)} style="height: {height}; background-color: {bgColor}" class={visible ? 'show' : ''}>
	<slot />
</section>

<style>
	section {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		opacity: 0;
		transition: opacity var(--fast);

		&.show {
			opacity: 1;
		}

		@media (max-width: 720px) {
			flex-direction: column;
		}
	}
</style>

