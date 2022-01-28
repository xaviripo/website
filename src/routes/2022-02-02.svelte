<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('wordle-allowed-guesses.txt');

		if (res.status === 200) {
			const data = await res.text();
			return { validGuesses: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';

	import Wordle from '../components/wordle/Wordle.svelte';

	export let validGuesses;

	let logged = false;
	let username = '';
	let password = '';

	const VALID_USERNAMES = ['atozbarcelona'];
	const VALID_PASSWORDS = ['我爱你', '我愛你'];

	function submit(event) {
		event.preventDefault();

		if (VALID_USERNAMES.includes(username) && VALID_PASSWORDS.includes(password)) {
			alert('✅ Valid credentials!');
			logged = true;
		} else {
			alert('❌ Invalid credentials!');
		}

	}
</script>

<svelte:head>
	<title>Xavier Ripoll — 2022-02-02</title>
</svelte:head>

{#if logged}
	<Wordle {validGuesses}/>
{:else}
	<form>
		<input type="text" placeholder="username" bind:value={username}/><br/>
		<input type="password" placeholder="password" bind:value={password}/><br/>
		<input type="submit" value="Log in" on:click={submit}/>
	</form>
{/if}
