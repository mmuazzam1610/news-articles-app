import { FC } from "react";
import { Story } from "../../../types/stories";
import { StoryBlurb } from "../StoryBlurb";

interface Props {
  stories: Story[];
}

export const StoriesSection: FC<Props> = ({ stories }) => {
  return (
    <div className="container">
      {stories.map((story, index) => (
        <StoryBlurb story={story} key={index} />
      ))}
    </div>
  );
};
