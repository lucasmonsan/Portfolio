<script>
	import Page from './../lib/containers/Page.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<Page>
	<Intro />
	<About />
	<Projects />
	<Contact />
</Page>
