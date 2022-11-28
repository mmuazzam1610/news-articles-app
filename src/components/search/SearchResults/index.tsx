import { FC } from "react";
import { Article } from "../../../types/stories";
import { ArticleCard } from "../ArticleCard";
import "./searchresults.css";

interface Props {
  results: Article[];
}

export const SearchResults: FC<Props> = ({ results }) => {
  return (
    <div className="results">
      {results.map((story, index) => (
        <ArticleCard story={story} key={index} />
      ))}
    </div>
  );
};
