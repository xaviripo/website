<script>
	// The correct solution, in order to color this one. Leave blank in order not to color.
	export let solution;
	// The word in the entry.
	export let word;
	// The maximum allowed length of words.
	export let length;

	function grey(i) {

		let solutionArr = solution.split('');
		let wordArr = word.split('');

		// A position is grey if its letterIndex is lower than the number of non-coincidental instances of the letter in the solution
		let coincidences = solutionArr
			.map((l, j) => l == wordArr[j] && l == wordArr[i]);
		let solutionWithoutCoincidences = solutionArr.filter((_, j) => !coincidences[j]);

		let letterIndex = wordArr
			.map((l, j) => [l, j])
			.filter(([l, j]) => !coincidences[j] && l == wordArr[i])
			.map(([l, j]) => j)
			.indexOf(i);

		let noncoincidentalAmount = solutionWithoutCoincidences
			.reduce((acc, cur) => acc + (cur == wordArr[i]), 0);

		return letterIndex > -1 && letterIndex < noncoincidentalAmount;

	}

	function color(i) {
		if (solution == '') {
			return 'guess';
		}

		if (solution[i] == word[i]) {
			return 'green';
		} else if (grey(i)) {
			return 'yellow';
		} else {
			return 'grey';
		}
	}
</script>

<style>
	.entry {
		text-align: center;
		vertical-align: middle;
	}
	.box {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		border: 1px solid #565758;
		width: 50px;
		height: 50px;
		margin: 5px;
		padding-top: 4px;
		color: rgb(215, 218, 220);
		font-size: 20pt;
		font-weight: bold;
	}

	.grey {
		border: 1px solid #565758;
		background-color: #565758;
	}
	.yellow {
		border: 1px solid #c9b458;
		background-color: #c9b458;
	}
	.green {
		border: 1px solid #6aaa64;
		background-color: #6aaa64;
	}
	.guess {

	}
</style>

<div class="entry">
	{#each [...Array(length).keys()] as i}
		<div class="box {color(i)}">
			{word[i] ? word[i].toUpperCase() : ' '}
		</div>
	{/each}
</div>
