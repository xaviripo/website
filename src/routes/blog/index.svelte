<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	li {
		margin-bottom: 1em;
	}

	small {
		color: #333333;
	}
</style>

<svelte:head>
	<title>Xavier Ripoll — Blog</title>
</svelte:head>

<h1>Blog</h1>

<p>I really enjoy writing. These are some of my written thoughts.</p>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<a rel='prefetch' href='blog/{post.slug}'>{post.title}</a><br>
			<small>{post.date.substring(0, 10)}</small>
		</li>
	{/each}
</ul>