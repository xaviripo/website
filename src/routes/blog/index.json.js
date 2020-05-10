import posts from './_posts/*';

const contents = JSON.stringify(posts.map(post => post.metadata));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}