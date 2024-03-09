import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home";
import HomeData from "./pages/home.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
    data: HomeData,
  },
  // {
  //   path: "/about",
  //   component: lazy(() => import("./pages/about")),
  //   data: AboutData,
  // },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
