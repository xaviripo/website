<script>

	import { onMount } from 'svelte';
	import Entry from './Entry.svelte';

	// Array of strings that are valid guesses
	export let validGuesses;

	const WORD_LEN = 5;
	const SOLUTION = 'couch';

	// Guesses so far
	let history = [];

	// The current guess entered, as a string
	let guess = '';

	// Whether the game has finished
	let win = false;

	let audio;

	onMount(() => {
		audio = new Audio('tada.mp3');
	});

	function handleKeydown(event) {

		// Unwanted weird events
		if (!event.key) {
			return;
		}

		// Backspace = remove last letter
		if (event.key === 'Backspace') {
			guess = guess.slice(0, guess.length - 1);
		}

		if (event.key === 'Enter' && guess.length === WORD_LEN) {

			// Invalid guess?
			if (!validGuesses.includes(guess)) {
				alert('❌ Invalid guess!');
				return;
			}

			// Add guess to history
			history = [...history, guess];

			// Victory?
			if (guess == SOLUTION) {
				win = true;
				audio.play();
				const jsConfetti = new JSConfetti();
				jsConfetti.addConfetti({
					confettiRadius: 6,
					confettiNumber: 500,
				});
			}

			guess = '';

		}

		// Not a valid letter
		if (event.which < 65 || event.which > 90) {
			return;
		}

		// Enough letters already
		if (guess.length >= WORD_LEN) {
			return;
		}

		guess = guess + event.key.toLowerCase();

	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
</svelte:head>

<style>
.center {
  display: table;
  margin: 0 auto;
}
a {
	color: inherit;
	text-decoration: underline;
}
</style>

<div class="center">
	{#each history as entry}
		<Entry length={WORD_LEN} word={entry} solution={SOLUTION} /><br/>
	{/each}
	{#if !win}
		<Entry length={WORD_LEN} word={guess} solution="" />
	{:else}
		<footer><a href="https://orangefreesounds.com/ta-da-orchestra-fanfare/">Fanfare sound effect</a> by <a href="https://orangefreesounds.com/">Alexander</a></footer>
		<footer><a href="https://www.npmjs.com/package/js-confetti">Confetti effect</a> by <a href="https://github.com/loonywizard">Vladimir Nikitin</a></footer>
	{/if}
</div>
