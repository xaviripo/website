<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		width: min(var(--content-width), 100%);
		margin: 0 auto;
		padding: 5em 2em;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>