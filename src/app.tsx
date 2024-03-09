import { createEffect, type Component } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { For, Match, Switch } from "solid-js";

import { routes } from "./routes";

const App: Component = () => {
  const Route = useRoutes(routes);

  createEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  });

  return (
    <section class="bg-background w-full max-w-screen-md mx-auto py-10 px-5 md:px-12 min-h-dvh flex flex-col justify-between">
      <header class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/92993973"
            class="w-12 h-12 rounded-full"
            alt="Profile picture"
          />
          <div>
            <Text variant="h4">Chizi Victor</Text>
            <Text asLabel>Software Engineer</Text>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <For
            each={[
              { id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
              { id: "github", name: "GitHub", url: "https://github.com/chizidotdev" },
            ]}
          >
            {(link) => (
              <a
                href={link.url}
                class="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Switch>
                    <Match when={link.id === "twitter"}>
                      <TwitterIcon />
                    </Match>
                    <Match when={link.id === "github"}>
                      <GithubIcon />
                    </Match>
                  </Switch>
                </Button>
              </a>
            )}
          </For>
        </div>
      </header>

      <main>
        <Route />
      </main>

      <footer class="flex flex-col items-center justify-between gap-4 mt-10">
        <div class="flex items-center gap-3">
          <For
            each={[
              { id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
              { id: "github", name: "GitHub", url: "https://github.com/chizidotdev" },
            ]}
          >
            {(link) => (
              <a
                href={link.url}
                class="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Switch>
                    <Match when={link.id === "twitter"}>
                      <TwitterIcon />
                    </Match>
                    <Match when={link.id === "github"}>
                      <GithubIcon />
                    </Match>
                  </Switch>
                </Button>
              </a>
            )}
          </For>
        </div>

        <Text asLabel>
          Built with
          <a href="https://solidjs.com/">
            <Button variant="link" class="px-1">
              SolidJS
            </Button>
          </a>
        </Text>
      </footer>
    </section>
  );
};

export default App;
