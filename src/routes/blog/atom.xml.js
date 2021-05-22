import fetch from 'node-fetch';

function makeFeed(entries) {

	const domain = 'https://xavi.rip/';
	const fullName = 'Xavier Ripoll';

	const author = `<author><name>${fullName}</name></author>`;

	// See specification: https://validator.w3.org/feed/docs/atom.html
	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<id>${domain}blog</id>${ "" /* Mandatory fields */ }
	<title>${fullName} — Blog</title>
	<updated>${ entries.sort((a, b) => b - a).pop().date }</updated>
	${ "" /* Recommended fields */ }
	${author}
	<link rel="self" href="${domain}blog/atom.xml"/>
	${ "" /* Optional fields */ }
	<icon>/favicon.png</icon>
	<rights>© ${new Date().getFullYear()} ${fullName} </rights>

${ "" /* Entries */ }
${entries
		.reverse()
		.map(({ title, slug, date, tags, summary }) => `	<entry>
		<id>${domain}blog/${slug}</id>${ "" /* Mandatory fields */ }
		<title>${title}</title>
		<updated>${date}</updated>
		${author}${ "" /* Recommended fields */ }
		<content type="text/html" src="${domain}blog/${slug}"/>
		<link href="${domain}blog/${slug}"/>
		<summary>${summary}</summary>
		${(tags || []).map(tag => `<category term="${tag}"/>`).join('\n')}${ "" /* Optional fields */ }
		<published>${date}</published>
		<rights>© ${ date.substring(0, 4) } ${fullName}</rights>
	</entry>`)
		.join('\n')}

</feed>`;

}

export function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/atom+xml'
	});

	// fetch only takes absolute URLs
	const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://xavi.rip';
	fetch(`${domain}/blog.json`)
		.then(r => r.json())
		.then(posts => {
			res.end(makeFeed(posts));
		});
}
