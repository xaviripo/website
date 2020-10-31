<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts: posts.reverse() };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}

	.item {
		display: block;
		margin-bottom: 1em;
		padding: 1em;
		box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
	}

	.item > small {
		color: #777777;
	}

	.item:hover {
		text-decoration: none;
		box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.3) 0px 0px 8px;
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
			<a rel='prefetch' href='blog/{post.slug}' class='item'>
				{post.title}<br>
				<small>{post.date.substring(0, 10)}</small>
			</a>
		</li>
	{/each}
</ul>