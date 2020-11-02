<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		width: min(var(--content-width), 100%);
		margin: 0 auto;
		padding: 5em 2em;
	}
</style>

<div class="d-flex flex-column vertical-fill-wrapper">
	<Nav {segment}/>

	<main class="flex-fill">
		<slot></slot>
	</main>

	<Footer/>
</div>
