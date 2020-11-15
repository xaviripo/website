<script>
	export let segment;
</script>

<style>
	.navbar {
		padding-left: max(calc((100% - var(--content-width))/2), 1em);
		padding-right: max(calc((100% - var(--content-width))/2), 1em);
	}
</style>

<head>
	<script src="https://kit.fontawesome.com/42e29c0859.js" crossorigin="anonymous"></script>
</head>

<nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
	<a class="navbar-brand" href=".">Xavier Ripoll</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<a class="nav-item nav-link {segment === 'about' ? 'active' : ''}" href="about">About</a>
			<a class="nav-item nav-link {segment === 'blog' ? 'active' : ''}" href="blog">Blog</a>
			<a class="nav-item nav-link {segment === 'shop' ? 'active' : ''}" href="shop" rel=external>Shop</a>
			<a class="nav-item nav-link {segment === 'contact' ? 'active' : ''}" href="contact">Contact</a>
		</div>
		<div class="navbar-nav ml-auto">
			<a class="nav-item nav-link" href='https://github.com/xaviripo' target="_blank"><i title="GitHub" class="fab fa-github-alt"></i></a>
			<a class="nav-item nav-link" href='https://twitter.com/xaviripo' target="_blank"><i title="Twitter" class="fab fa-twitter"></i></a>
			<a class="nav-item nav-link" href='blog/atom.xml' target="_blank"><i title="Atom feed" class="fas fa-rss"></i></a>
		</div>
	</div>
</nav>