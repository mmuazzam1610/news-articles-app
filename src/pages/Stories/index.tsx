import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "../../components/shared/AppLayout";
import { StoriesSection } from "../../components/stories/StoriesSection";
import { useAppSelector } from "../../redux/hooks";
import { Story } from "../../types/stories";
import { buildStoriesURL } from "../../utils";
import "./stories.css";

const Stories: FC = () => {
  const { type } = useParams();
  const [stories, setStories] = useState<Story[]>([]);
  const accessToken = useAppSelector((state) => state.auth.accesstoken);

  useEffect(() => {
    axios.get(buildStoriesURL(type)).then((res) => {
      setStories(res.data.results.filter((el: Story) => el.title));
    });
  }, [type, accessToken]);

  return (
    <AppLayout>
      <h1 className="heading">{type} News</h1>
      <StoriesSection stories={stories} />
    </AppLayout>
  );
};

export default Stories;
