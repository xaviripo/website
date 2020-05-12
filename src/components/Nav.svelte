<script>
	export let segment;
</script>

<style>
	.navbar {
		padding-left: max(calc((100% - var(--content-width))/2), 1em);
		padding-right: max(calc((100% - var(--content-width))/2), 1em);
	}
</style>


<nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
	<a class="navbar-brand" href=".">Xavier Ripoll</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<a class="nav-item nav-link {segment === 'about' ? 'active' : ''}" href="about">About</a>
			<a class="nav-item nav-link {segment === 'blog' ? 'active' : ''}" href="blog">Blog</a>
		</div>
		<div class="navbar-nav ml-auto">
			<a class="nav-item nav-link" href='https://github.com/xaviripo' target="_blank">GitHub</a>
			<a class="nav-item nav-link" href='https://twitter.com/xaviripo' target="_blank">Twitter</a>
		</div>
	</div>
</nav>