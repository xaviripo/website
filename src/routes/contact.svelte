<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		// Mail obfuscation
		document.getElementById('mail').innerHTML = atob('eGF2aXJpcG85N0BnbWFpbC5jb20=');
	});

</script>

<svelte:head>
	<title>Xavier Ripoll — Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>You can send me an email at <span id='mail'></span>.</p>
