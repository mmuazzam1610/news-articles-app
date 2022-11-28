import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoriesSection } from "../../components/stories/StoriesSection";
import { Story } from "../../types/stories";
import { buildStoriesURL } from "../../utils";
import "./stories.css";

const Stories: FC = () => {
  const { type } = useParams();
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios.get(buildStoriesURL(type)).then((res) => {
      setStories(res.data.results.filter((el: Story) => el.title));
      console.log(res.data.results);
    });
  }, [type]);

  return (
    <div>
      <h1 className="heading">{type} News</h1>
      <StoriesSection stories={stories} />
    </div>
  );
};

export default Stories;
