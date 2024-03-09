import { useRouteData } from "@solidjs/router";
import { HomeDataType } from "./home.data";
import { Text } from "@/components/text";
import { FancyButton } from "@/components/button";
import { For, Show, createResource } from "solid-js";
import { Badge } from "@/components/badge";
import { SnippetsPreviewList } from "@/components/snippets";
import { ArticleItem } from "@/components/article-item";
import { getPreviewSnippets } from "@/lib/sanity";

export default function Home() {
  const [snippets] = createResource(getPreviewSnippets);
  const data = useRouteData<HomeDataType>();

  return (
    <section class="my-16 md:my-24 space-y-14 md:space-y-20">
      <section class="space-y-4">
        <div class="flex flex-col capitalize">
          <Text variant="h1">{data()?.headline.top}</Text>
          <Text class="text-muted-foreground" variant="h1">
            {data()?.headline.bottom}
          </Text>
        </div>

        <Text>{data()?.summary}</Text>

        <FancyButton>Contact me</FancyButton>
      </section>

      <Show when={snippets()}>
        <SnippetsPreviewList snippets={snippets()} />
      </Show>

      <section>
        <Text variant="h4">Projects</Text>
        <For each={data()?.projects}>
          {(project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ArticleItem>
                <Text variant="h4" class="flex items-center gap-2">
                  {project.title}
                  <Show when={project.pending}>
                    <Badge variant="secondary">In progress</Badge>
                  </Show>
                </Text>
                <Text asLabel class="mt-1">
                  {project.summary}
                </Text>
              </ArticleItem>
            </a>
          )}
        </For>
      </section>
    </section>
  );
}
