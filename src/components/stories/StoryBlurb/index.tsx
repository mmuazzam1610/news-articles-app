import { FC } from "react";
import { Story } from "../../../types/stories";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./storyblurb.css";
import { useNavigate } from "react-router-dom";

interface Props {
  story: Story;
}

export const StoryBlurb: FC<Props> = ({ story }) => {
  const navigate = useNavigate();

  const onClickArticle = () => {
    navigate("/story", { state: story });
  };

  return (
    <Card className="card" bg="dark" text="light">
      <Card.Header as="h4">{story.title}</Card.Header>
      <Card.Body>
        <Card.Text>{story.abstract}</Card.Text>
        <Card.Text className="subtitle">{story.byline}</Card.Text>
        <Button variant="primary" onClick={onClickArticle}>
          Go to the article
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <span>{new Date(story.published_date).toDateString()}</span>
      </Card.Footer>
    </Card>
  );
};
