<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

{#if segment === '2022-02-02'}
	<style>
		body {
			background-color: rgb(18, 18, 19);
		}
	</style>
{/if}

{#if segment === '2022-02-02'}
	<div class="d-flex flex-column vertical-fill-wrapper">
		<main class="flex-fill">
			<slot></slot>
		</main>
	</div>
{:else}
	<div class="d-flex flex-column vertical-fill-wrapper">
		<Nav {segment}/>

		<main class="flex-fill">
			<slot></slot>
		</main>

		<Footer/>
	</div>
{/if}
