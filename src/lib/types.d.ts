type SnippetPreview = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
};

type Snippet = SnippetPreview & {
  body: any;
};
