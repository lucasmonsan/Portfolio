<script>
	import { observer } from '$lib/functions/observer';

	let visible = false;
</script>

<section use:observer on:enterViewport={() => (visible = true)} on:exitViewport={() => (visible = false)} class={visible ? 'show' : ''}>
	<slot />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		width: 100%;
		opacity: 0;
		transition: opacity var(--fast);

		&.show {
			opacity: 1;
		}
	}
</style>

