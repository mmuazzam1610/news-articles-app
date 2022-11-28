import { storiesURL, apiKey, searchURL } from "../constants";
import { storiesType } from "../types/stories";

export const buildStoriesURL = (type: string | undefined) => {
  const url =
    type === storiesType.science
      ? storiesURL + "science.json"
      : storiesURL + "world.json";

  return url + "?api-key=" + apiKey;
};

export const buildSearchURL = (q: string, page?: number) => {
  let url = searchURL + q + "&api-key=" + apiKey;
  if (page) return url + "&page=" + page;
  else return url;
};
