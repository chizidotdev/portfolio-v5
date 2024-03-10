declare module '@sanity/block-content-to-markdown';

type Snippet = {
	title: string;
	description: string;
	date: string;
	published: boolean;
	slug: string;
};

type SanitySnippetPreview = {
	_id: string;
	slug: string;
	title: string;
	description: string;
	icon: string;
};

type SanitySnippet = SanitySnippetPreview & {
	body: any;
	_updatedAt: string;
};
