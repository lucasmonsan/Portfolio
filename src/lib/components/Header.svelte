<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let currentHash = '';
	let checkbox = false;
	let isScrolled = false;
	let isClient = false;

	onMount(() => {
		isClient = true;

		const updateHash = () => (currentHash = window.location.hash);
		window.addEventListener('hashchange', updateHash);
		updateHash();

		const handleScroll = () => (isScrolled = window.scrollY > (window.innerWidth <= 840 ? 600 : 900));
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('hashchange', updateHash);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const goToHash = (e: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, hash: string) => {
		e.preventDefault();
		if (currentHash !== hash) {
			currentHash = hash;
			goto(hash);
			checkbox = false;
		}
	};
</script>

<header class={isScrolled ? 'scrolled' : ''}>
	<a href="#Intro" id="Logo">
		<h3>Monsan.</h3>
	</a>

	<div class="menu">
		{#if isScrolled}
			<button class="stroke-white cta" transition:fly={{ x: 15, duration: 500, easing: cubicInOut }}>BORA BATER UM PAPO?</button>
		{/if}

		<nav class={checkbox ? 'show' : ''}>
			<a id="LinkAbout" class={currentHash === '#About' ? 'link-active' : 'link-inative'} href="#About" on:click={(e) => goToHash(e, '#About')}> Sobre mim </a>
			<a id="LinkProjects" class={currentHash === '#Projects' ? 'link-active' : 'link-inative'} href="#Projects" on:click={(e) => goToHash(e, '#Projects')}> Projetos </a>
			<a id="LinkContact" class={currentHash === '#Contact' ? 'link-active' : 'link-inative'} href="#Contact" on:click={(e) => goToHash(e, '#Contact')}> Contato </a>
		</nav>

		{#if isClient && window.screen.width <= 840}
			<input type="checkbox" id="checkbox" bind:checked={checkbox} />
			<label for="checkbox" class="toggle">
				<div class="bar bar--top"></div>
				<div class="bar bar--middle"></div>
				<div class="bar bar--bottom"></div>
			</label>
		{/if}
	</div>
</header>

<style>
	/* Estilos para o header e o toggle de menu */
	header {
		z-index: var(--z-header);
		position: fixed;
		top: calc(var(--base) * 2);
		left: calc(var(--base) * 5);
		right: calc(var(--base) * 5);
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: calc(100% - calc(var(--base) * 10));
		height: calc(var(--base) * 5.5);
		padding: 0 calc(var(--base) * 2);
		background-color: var(--color-text);
		box-shadow: var(--shadow-2);
		transition: all var(--slow);

		&.scrolled {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
		}

		@media (max-width: 840px) {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: calc(var(--base) * 6.5);
		}
	}

	h3 {
		width: auto;
		color: var(--color-bg);
		font-weight: 500;
	}

	nav {
		@media (max-width: 840px) {
			overflow: hidden;
			position: fixed;
			top: calc(var(--base) * 6.4);
			left: 0;
			width: 100%;
			height: 0;
			background-color: var(--color-text);
			border-top: solid 2px var(--color-bg);
			border-bottom: solid 2px var(--color-bg);
			opacity: 0;
			transition: all var(--fast);

			&.show {
				height: calc(var(--base) * 5);
				opacity: 1;
			}
		}
	}

	nav a {
		height: 100%;
		text-align: center;

		@media (max-width: 840px) {
			width: 100%;
		}

		&#LinkAbout {
			min-width: calc(var(--base) * 7.5);
		}
		&#LinkProjects {
			min-width: calc(var(--base) * 6.25);
		}
		&#LinkContact {
			min-width: calc(var(--base) * 5.75);
		}
	}

	div {
		&.menu {
			gap: var(--base);
		}
	}

	button {
		&.cta {
			width: auto;
			padding: var(--base) calc(var(--base) * 1.5);

			@media (max-width: 840px) {
				width: auto;
				padding: var(--base);
			}
		}
	}

	#checkbox {
		display: none;
	}

	.toggle {
		position: relative;
		cursor: pointer;
		display: block;
		width: calc(var(--base) * 3);
		height: calc(var(--base) * 3);
		margin: auto;
	}

	.bar {
		position: absolute;
		left: 0;
		right: 0;
		height: calc(var(--base) * 0.2);
		background: var(--color-bg);
		opacity: 1;
		transition: none 0.3s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
	}

	.bar--top {
		bottom: calc(50% + 11px + 4px / 2);
		transition-property: bottom, transform;
		transition-delay: calc(0s + 0.3s), 0s;
	}

	.bar--middle {
		top: calc(50% - 4px / 3);
		transition-property: opacity;
		transition-delay: calc(0s + 0.3s);
	}

	.bar--bottom {
		top: calc(50% + 11px + 4px / 2);
		transition-property: top, transform;
		transition-delay: calc(0s + 0.3s), 0s;
	}

	#checkbox:checked + .toggle .bar--top {
		bottom: calc(50% - 4px / 3);
		transform: rotate(135deg);
		transition-delay: 0s, calc(0s + 0.3s);
	}

	#checkbox:checked + .toggle .bar--middle {
		opacity: 0;
		transition-duration: 0s;
		transition-delay: calc(0s + 0.3s);
	}

	#checkbox:checked + .toggle .bar--bottom {
		top: calc(50% - 4px / 3);
		transform: rotate(225deg);
		transition-delay: 0s, calc(0s + 0.3s);
	}
</style>
