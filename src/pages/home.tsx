import { useRouteData } from "@solidjs/router";
import { HomeDataType } from "./home.data";
import { Text } from "@/components/text";
import { FancyButton } from "@/components/button";
import { LinkIcon } from "@/components/icons";
import { For, Show } from "solid-js";
import { Badge } from "@/components/badge";
import { cn } from "@/lib/utils";

export default function Home() {
  const data = useRouteData<HomeDataType>();

  return (
    <section class="my-20 space-y-14 md:space-y-20">
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

      <section>
        <Text variant="h3">Projects</Text>
        <For each={data()?.projects}>
          {(project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <article
                class={cn(
                  "mt-2 flex items-center gap-4",
                  "group py-4 md:px-4 md:hover:bg-muted rounded-lg transition-colors",
                )}
              >
                <div class="flex-1">
                  <Text variant="h4" class="flex items-center gap-2">
                    {project.title}
                    <Show when={project.pending}>
                      <Badge variant="secondary">In progress</Badge>
                    </Show>
                  </Text>
                  <Text asLabel class="mt-1">
                    {project.summary}
                  </Text>
                </div>
                <span class="group-hover:opacity-100 md:opacity-0 md:px-4 transition-opacity">
                  <LinkIcon />
                </span>
              </article>
            </a>
          )}
        </For>
      </section>
    </section>
  );
}
