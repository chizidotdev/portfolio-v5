import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SANITY_PROJECT_ID } from "./constants";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "snippets",
  useCdn: true,
  apiVersion: "2023-05-03",
});

export const imageBuilder = ImageUrlBuilder(sanityClient);

export const urlForImage = (source: any) => {
  console.log();
  return imageBuilder.image(source).auto("format").fit("max");
};

const snippetFields = `
  _id,
  title,
  description,
  icon,
  "slug": slug.current,
`;

const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;
export const getAllSnippets = async () => {
  const snippets: SnippetPreview[] = await sanityClient.fetch(allSnippetsQuery);
  return snippets;
};

const previewListsnippets = `
*[_type == "snippet"] | order(date desc, _updatedAt desc)[1...4] {
  ${snippetFields}
}`;
export const getPreviewSnippets = async () => {
  const snippets: SnippetPreview[] = await sanityClient.fetch(previewListsnippets);
  return snippets;
};

const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
    body,
    ${snippetFields}
}
`;
export const getSnippetBySlug = async (slug: string) => {
  const snippet: Snippet = await sanityClient.fetch(snippetBySlugQuery, { slug });
  return snippet;
};
