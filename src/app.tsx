import { createEffect, type Component } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { Button } from "@/components/button";
import { Text, textVariants } from "@/components/text";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
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

      <footer class="flex flex-col items-center sm:items-start justify-between gap-4 mt-10">
        <div class="flex items-center gap-3">
          <For
            each={[
              { id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
              { id: "github", name: "GitHub", url: "https://github.com/chizidotdev" },
              {
                id: "linkedin",
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/chizi-wokoma-1b486a226/",
              },
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
                    <Match when={link.id === "linkedin"}>
                      <LinkedinIcon />
                    </Match>
                  </Switch>
                </Button>
              </a>
            )}
          </For>
        </div>

        <Text class="text-center sm:text-left">
          Developed by <span class={textVariants({ asLabel: true })}>@chizidotdev</span>. Built with
          &nbsp;
          <a
            href="https://solidjs.com/"
            class="text-muted-foreground underline-offset-4 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SolidJS
          </a>
          &nbsp; and &nbsp;
          <a
            href="https://tailwindcss.com/"
            class="text-muted-foreground underline-offset-4 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          , deployed on &nbsp;
          <a
            href="https://railway.app/"
            class="text-muted-foreground underline-offset-4 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Railway
          </a>
          .
        </Text>
      </footer>
    </section>
  );
};

export default App;
