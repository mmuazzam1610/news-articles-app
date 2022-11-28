export enum storiesType {
  world = "world",
  science = "science",
}

export interface Story {
  abstract: string;
  byline: string;
  published_date: string;
  short_url: string;
  title: string;
  multimedia: { caption: string; url: string; width: string; height: string }[];
}

export interface Article {
  abstract: string;
  byline: { original: string };
  headline: { main: string };
  web_url: string;
  pub_date: string;
}
