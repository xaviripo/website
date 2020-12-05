<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
</style>

<div class="d-flex flex-column vertical-fill-wrapper">
	<Nav {segment}/>

	<main class="flex-fill">
		<slot></slot>
	</main>

	<Footer/>
</div>
