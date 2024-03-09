import { For } from "solid-js";
import { Text } from "./text";
import { ArticleItem } from "./article-item";
import { Badge } from "./badge";
import { urlForImage } from "@/lib/sanity";
import { Button } from "./button";

export function SnippetsPreviewList(props: { snippets: SnippetPreview[] }) {
  return (
    <section class="">
      <Text variant="h4" class="flex items-center gap-2">
        Snippets <Badge>Beta</Badge>
      </Text>

      <For each={props.snippets}>
        {(snippet) => (
          <ArticleItem>
            <div class="flex items-center gap-4">
              <img
                src={urlForImage(snippet.icon).url()}
                alt={snippet.title}
                class="rounded-full object-cover w-10 h-10 opacity-85"
              />
              <div>
                <Text variant="h4">{snippet.title}</Text>
                <Text asLabel>{snippet.description}</Text>
              </div>
            </div>
          </ArticleItem>
        )}
      </For>

      <div class="mt-6 text-center md:text-left">
        <Button variant="secondary">View more</Button>
      </div>
    </section>
  );
}
