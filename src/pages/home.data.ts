import type { RouteDataFunc } from "@solidjs/router";
import { createResource, Resource } from "solid-js";

type DataType = typeof homeData;
async function fetchName(): Promise<DataType> {
  return homeData;
}

const HomeData: RouteDataFunc<never, Resource<DataType>> = () => {
  const [data] = createResource(fetchName);

  return data;
};

export default HomeData;
export type HomeDataType = typeof HomeData;

export const homeData = {
  headline: { top: "Building my own ideas.", bottom: "Inspiring you to launch yours." },
  summary:
    "Software developer and unabashed nerd. Building (and occasionally designing) aesthetic and timeless digital experiences. Founder of Aidmedium, currently senior Frontend Engineer at Pioneering Programmers.",
  projects: [
    {
      title: "Copia",
      link: "https://copia.aidmedium.com",
      summary:
        "Headless e-commerce platform for small businesses and direct sales representatives.",
      pending: true,
    },
    {
      title: "Aidmedium",
      link: "https://aidmedium.com",
      summary:
        "A web design and development agency concept helping individuals and businesses grow their online presence.",
      pending: false,
    },
    {
      title: "Nuntius",
      link: "https://nuntius.aidmedium.com",
      summary: "An interactive messaging web-app with a dare game.",
      pending: false,
    },
  ],
} as const;
