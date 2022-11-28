import { FC } from "react";
import { Article } from "../../../types/stories";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./articlecard.css";

interface Props {
  story: Article;
}

export const ArticleCard: FC<Props> = ({ story }) => {
  return (
    <Card className="card" bg="dark" text="light">
      <Card.Header as="h4">{story.headline.main}</Card.Header>
      <Card.Body>
        <Card.Text>{story.abstract}</Card.Text>
        <Card.Text className="subtitle">{story.byline.original}</Card.Text>
        <a target="_blank" href={story.web_url} rel="noreferrer">
          <Button variant="primary">Go to the article</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">
        <span>{new Date(story.pub_date).toDateString()}</span>
      </Card.Footer>
    </Card>
  );
};
