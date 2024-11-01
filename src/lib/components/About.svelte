<script>
	import { onMount } from 'svelte';
	import Component from '$lib/containers/Component.svelte';
	import AppwriteIcon from '$lib/icons/AppwriteIcon.svelte';
	import TailwindIcon from '$lib/icons/TailwindIcon.svelte';
	import DockerIcon from '$lib/icons/DockerIcon.svelte';
	import CssIcon from '$lib/icons/CssIcon.svelte';
	import FirebaseIcon from '$lib/icons/FirebaseIcon.svelte';
	import Html5Icon from '$lib/icons/Html5Icon.svelte';
	import JavascriptIcon from '$lib/icons/JavascriptIcon.svelte';
	import NextIcon from '$lib/icons/NextIcon.svelte';
	import NodeIcon from '$lib/icons/NodeIcon.svelte';
	import MongodbIcon from '$lib/icons/MongodbIcon.svelte';
	import PhpIcon from '$lib/icons/PhpIcon.svelte';
	import PostgresqlIcon from '$lib/icons/PostgresqlIcon.svelte';
	import PythonIcon from '$lib/icons/PythonIcon.svelte';
	import ReactIcon from '$lib/icons/ReactIcon.svelte';
	import SvelteIcon from '$lib/icons/SvelteIcon.svelte';
	import TypescriptIcon from '$lib/icons/TypescriptIcon.svelte';
	import VueIcon from '$lib/icons/VueIcon.svelte';
	import WordpressIcon from '$lib/icons/WordpressIcon.svelte';
	import AwsIcon from '$lib/icons/AwsIcon.svelte';
	import PowerbiIcon from '$lib/icons/PowerbiIcon.svelte';

	let isClient = false;
	onMount(() => (isClient = true));
</script>

<Component idScroll="About" flexDir="column" bgColor="var(--color-bg)">
	<div class="title">
		<strong class="number01">01</strong>
		<h1>Quem sou eu?</h1>
	</div>

	<div class="description">
		<p>
			Trabalhei por muitos anos como <strong>ANALISTA DE TI</strong> e professor em escolas de cursos, mesclando com freelancers de <strong>DESIGNER</strong>
			para os mais diversos tipos de clientes. Nos últimos anos, migrei totalmente para a área de desenvolvimento, já que programar sempre foi, além de um trabalho, um hobbie que me permitiu unir minha <strong>PAIXÃO POR DESIGN</strong>
			e minha <strong>VONTADE DE CRIAR!</strong>
		</p>
		<p>
			Hoje, ajudo empresas e pessoas a alcançarem seus objetivos através da criação de soluções tecnológicas inovadoras e personalizadas. Meu trabalho envolve desde a concepção do design até a implementação final, sempre buscando entregar produtos que combinam estética e
			funcionalidade.
		</p>
		<p>Seja desenvolvendo um aplicativo, criando uma identidade visual ou aprimorando uma interface de usuário, estou comprometido em oferecer o melhor de minhas habilidades e experiência para cada projeto.</p>
	</div>

	<div class="infos">
		<div class="experience">
			<h4>Experiências</h4>

			<div class="card">
				<strong class="card-title">Agência Ofício (2022 - 2024)</strong>
				<p class="card-rules">Dev. Web - Técnico de TI - Suporte</p>
			</div>

			<div class="card">
				<strong class="card-title">Ded's Artes (2021 - 2022)</strong>
				<p class="card-rules">Designer Gráfico - Dev. LowCode</p>
			</div>

			<div class="card">
				<strong class="card-title">Trancid Divinópolis (2020)</strong>
				<p class="card-rules">Assist. de TI - Assist. de Marketing</p>
			</div>

			<div class="card">
				<strong class="card-title">Ábil Cursos (2019 - 2020)</strong>
				<p class="card-rules">Prof. de TI - Prof. de Design Gráfico</p>
			</div>

			<div class="card">
				<strong class="card-title">Papelaria Máxima (2018)</strong>
				<p class="card-rules">Designer Gráfico - Estoquista</p>
			</div>
		</div>

		<div class="academic">
			<h4>Formação</h4>

			<div class="card">
				<strong class="card-title">UFSJ</strong>
				<p class="card-rules">Ciência da Computação</p>
			</div>

			<div class="card">
				<strong class="card-title">Universidade Estácio de Sá</strong>
				<p class="card-rules">Análise e Desenvolvimento de Sistemas</p>
			</div>

			<div class="card">
				<strong class="card-title">Labenu</strong>
				<p class="card-rules">Programação Web - Full Stack</p>
			</div>

			<div class="card">
				<strong class="card-title">Dio.me</strong>
				<p class="card-rules">Inter: Orange Tech +</p>
				<p class="card-rules">Impulso: React Web Dev</p>
				<p class="card-rules">Database Experience: SQL + MongoDB</p>
				<p class="card-rules">Curso: Versionamento de Código</p>
			</div>
		</div>

		<div class="techs">
			<h4 class="title-tech">
				{#if isClient && window.screen.width > 840}Tecnologias{:else}Tech's{/if}
			</h4>
			<div class="tech-list">
				<figure>
					<ReactIcon />
					<figcaption>React</figcaption>
				</figure>

				<figure>
					<NextIcon />
					<figcaption>Next.js</figcaption>
				</figure>

				<figure>
					<TailwindIcon />
					<figcaption>Tailwind</figcaption>
				</figure>

				<figure>
					<SvelteIcon />
					<figcaption>Svelte</figcaption>
				</figure>

				<figure>
					<VueIcon />
					<figcaption>Vue</figcaption>
				</figure>

				<figure>
					<Html5Icon />
					<figcaption>HTML</figcaption>
				</figure>

				<figure>
					<JavascriptIcon />
					<figcaption>Javascript</figcaption>
				</figure>

				<figure>
					<PhpIcon />
					<figcaption>PHP</figcaption>
				</figure>

				<figure>
					<TypescriptIcon />
					<figcaption>Typescript</figcaption>
				</figure>

				<figure>
					<CssIcon />
					<figcaption>CSS</figcaption>
				</figure>

				<figure>
					<AwsIcon />
					<figcaption>AWS</figcaption>
				</figure>

				<figure>
					<AppwriteIcon />
					<figcaption>AppWrite</figcaption>
				</figure>

				<figure>
					<FirebaseIcon />
					<figcaption>Firebase</figcaption>
				</figure>

				<figure>
					<MongodbIcon />
					<figcaption>MongoDB</figcaption>
				</figure>

				<figure>
					<PostgresqlIcon />
					<figcaption>PostgreSQL</figcaption>
				</figure>

				<figure>
					<NodeIcon />
					<figcaption>Node</figcaption>
				</figure>

				<figure>
					<PythonIcon />
					<figcaption>Python</figcaption>
				</figure>

				<figure>
					<WordpressIcon />
					<figcaption>Wordpress</figcaption>
				</figure>

				<figure>
					<DockerIcon />
					<figcaption>Docker</figcaption>
				</figure>

				<figure>
					<PowerbiIcon />
					<figcaption>PowerBI</figcaption>
				</figure>
			</div>
		</div>
	</div>
</Component>

<style>
	div {
		align-items: flex-start;
		width: 100%;
		max-width: calc(var(--base) * 84);
		margin-bottom: calc(var(--base) * 5);

		&.title {
			align-items: center;
			height: calc(var(--base) * 9);
			margin-top: calc(var(--base) * 12);
			margin-bottom: calc(var(--base) * 3);
			padding: 0 calc(var(--base) * 2);
		}
		&.description {
			flex-direction: column;
			padding: 0 calc(var(--base) * 2);
		}
		&.infos {
			padding: 0 calc(var(--base) * 2);

			@media (max-width: 840px) {
				flex-direction: column;
			}
		}
		&.experience,
		.academic {
			flex-direction: column;
		}
		&.techs {
			flex-direction: column;
			width: auto;
			@media (max-width: 840px) {
				position: absolute;
				right: calc(var(--base) * 2);
				top: 0;
			}
		}
		&.card {
			flex-direction: column;
			justify-content: flex-start;
			margin-bottom: calc(var(--base));
		}
		&.tech-list {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: calc(var(--base) * 0.75);

			@media (max-width: 840px) {
				grid-template-columns: repeat(2, 1fr);
				gap: calc(var(--base) * 0.5);
			}
		}
	}

	strong {
		&.number01 {
			position: absolute;
			left: calc(var(--base) * 1.25);
			color: var(--color-placeholder);
			font-family: var(--family-1);
			font-size: calc(var(--base) * 12);
			font-weight: 500;
			letter-spacing: calc(var(--base) * -0.5);
			opacity: 0.25;
		}
		&.card-title {
			font-family: var(--family-1);
			font-size: calc(var(--base) * 1.4);
		}
	}

	h1 {
		z-index: 2;
		margin-left: calc(var(--base) * 1.5);
	}

	p {
		margin-top: calc(var(--base) * 1.5);
		line-height: calc(var(--base) * 2.5);

		&.card-rules {
			margin-top: 0;
			color: var(--color-text-light);
			line-height: calc(var(--base) * 1.75);
			font-size: calc(var(--base) * 1.2);
		}
	}

	h4 {
		padding-left: calc(var(--base) * 0.75);
		margin-bottom: calc(var(--base) * 2);
		font-weight: 600;
		line-height: calc(var(--base) * 1.5);
		border-left: solid 4px var(--color-1);

		@media (max-width: 840px) {
			&.title-tech {
				margin-bottom: calc(var(--base) * 1.5);
				padding-right: calc(var(--base) * 0.75);
				text-align: end;
				border-left: none;
				border-right: solid 4px var(--color-1);
			}
		}
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc(var(--base) * 0.25);
		width: calc(var(--base) * 4.5);
		height: calc(var(--base) * 5);
		padding: calc(var(--base) * 0.5);

		@media (max-width: 840px) {
			margin-bottom: calc(var(--base) * 0.125);
		}
	}

	figcaption {
		font-family: var(--family-1);
		font-size: calc(var(--base) * 0.9);
		font-weight: 700;
	}
</style>
