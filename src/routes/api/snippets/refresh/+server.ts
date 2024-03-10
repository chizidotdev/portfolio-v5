import { createClient } from '@sanity/client';
import { SECRET_SANITY_KEY } from '$env/static/private';
import toMarkdown from '@sanity/block-content-to-markdown';
import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const serializers = {
	types: {
		code: (props: any) => '```' + props.node.language + '\n' + props.node.code + '\n```'
	}
};

const sanityClient = createClient({
	projectId: SECRET_SANITY_KEY,
	dataset: 'snippets',
	useCdn: true,
	apiVersion: '2023-05-03'
});

const snippetFields = `
  _id,
  title,
  description,
  icon,
  body,
  "slug": slug.current,
  _updatedAt,
`;

const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;
const getAllSnippets = async () => {
	const snippets: SanitySnippet[] = await sanityClient.fetch(allSnippetsQuery);
	return snippets;
};

export const GET: RequestHandler = async () => {
	const snippets = await getAllSnippets();
	for (const snippet of snippets) {
		const body = toMarkdown(snippet.body, { serializers });
		const filePath = path.join('src', 'snippets', `${snippet.slug}.md`);

		console.log(snippet.title, '>>>>>>>>>>', filePath);
		const stream = fs.createWriteStream(filePath);
		stream.write('---\n');
		stream.write('title: ' + snippet.title + '\n');
		stream.write('description: ' + snippet.description + '\n');
		stream.write('date: ' + snippet._updatedAt + '\n');
		stream.write('published: true\n');

		stream.write('---\n\n');
		stream.write(body);
		stream.end();
		// fs.writeFileSync(filePath, body);
	}

	return new Response('Snippets updated successfully', { status: 200 });
};
