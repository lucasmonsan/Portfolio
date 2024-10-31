<script>
	import Component from '$lib/containers/Component.svelte';
	import DownIcon from '$lib/icons/DownIcon.svelte';
	import lucasmonsan_00 from '$lib/images/lucasmonsan_00.webp';
	import { onMount } from 'svelte';

	let isClient = false;
	onMount(() => (isClient = true));
</script>

<Component height="100dvh" bgColor="var(--color-bg-2)">
	<div class="texts">
		<p>HELLO WORLD...</p>
		{#if isClient && window.screen.width > 840}
			<h1>Meu nome é <strong>Lucas Monsan,</strong></h1>
			<h2>Digital Designer, UI/UX</h2>
			<h2>& Dev Fullstack especialista</h2>
			<h2>em responsividade,</h2>
			<h2>performance e SEO.</h2>
		{:else}
			<h4>Meu nome é</h4>
			<h1><strong>Lucas Monsan</strong>,</h1>
			<h4>Digital Designer, UI/UX</h4>
			<h4>& Dev Fullstack especialista</h4>
			<h4>em responsividade,</h4>
			<h4>performance e SEO.</h4>
		{/if}

		<div class="buttons">
			<button class={isClient && window.screen.width > 840 ? 'stroke-black' : 'stroke-white'}>MAIS SOBRE MIM</button>
			<button class={isClient && window.screen.width > 840 ? 'fill-black' : 'fill-white'}>BORA BATER UM PAPO?</button>
		</div>
	</div>

	<div class="image">
		<img src={lucasmonsan_00} alt="Foto de Lucas Monsan" />

		<div class="buttons-2">
			<hr />
			<button class={isClient && window.screen.width > 720 ? 'stroke-white' : 'transparent-white'}>MEU CV</button>
		</div>

		<div class="buttons-3">
			<button class="transparent-white" style="border: solid 2px; width: calc(var(--base) * 4); height: calc(var(--base) * 4); border-radius: 100%;">
				<DownIcon />
			</button>
		</div>
	</div>
</Component>

<style>
	div {
		align-items: flex-start;
		justify-content: flex-end;

		&.texts {
			z-index: 2;
			flex-direction: column;
			width: 55%;
			height: 100%;
			padding-left: calc(var(--base) * 5);
			padding-bottom: calc(var(--base) * 5);

			@media (max-width: 840px) {
				align-items: center;
				width: auto;
				height: auto;
				padding: 0 var(--base);
				margin-top: calc(var(--base) * 20);
			}
		}
		&.buttons {
			gap: var(--base);
			margin-top: calc(var(--base) * 4);

			@media (max-width: 840px) {
				flex-direction: column;
				width: 100%;
				margin-top: calc(var(--base) * 2);
			}
		}
		&.image {
			z-index: 1;
			align-items: flex-end;
			width: 45%;
			height: 100%;
			background-color: var(--color-text);

			@media (max-width: 840px) {
				position: absolute;
				width: 100%;
			}
		}
		&.buttons-2 {
			width: 100%;
			align-items: center;
			justify-content: flex-start;
			padding-bottom: calc(var(--base) * 5);

			@media (max-width: 840px) {
				padding-bottom: calc(var(--base) * 1.5);
			}
		}

		&.buttons-3 {
			align-items: center;
			justify-content: flex-start;
			padding-right: calc(var(--base) * 5);
			padding-bottom: calc(var(--base) * 5);

			@media (max-width: 840px) {
				padding-right: calc(var(--base) * 2);
				padding-bottom: calc(var(--base) * 1.5);
			}
		}
	}

	p {
		width: auto;
		margin-bottom: calc(var(--base) * 0.5);
		color: var(--color-1);
		font-weight: 600;
		border-bottom: solid;
	}

	h2,
	h4 {
		@media (max-width: 840px) {
			color: var(--color-bg);
			text-align: center;
		}
	}

	img {
		position: absolute;
	}

	hr {
		width: calc(var(--base) * 5);
		color: var(--color-bg);
	}
</style>

