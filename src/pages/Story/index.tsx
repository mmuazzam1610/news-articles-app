import { FC } from "react";
import { useLocation } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import "./story.css";
import { ShouldRender } from "../../components/shared/ShouldRender";

const Story: FC = () => {
  const location = useLocation();

  return (
    <div className="container">
      <h2>{location.state.title}</h2>
      <span>{location.state.byline}</span>
      <br />
      <span>{new Date(location.state.published_date).toDateString()}</span>
      <br />
      <ShouldRender check={location.state.multimedia[0]}>
        <br />
        <Figure>
          <Figure.Image
            width={location.state.multimedia[0].width}
            height={location.state.multimedia[0].height}
            src={location.state.multimedia[0].url}
          />
          <Figure.Caption>
            {location.state.multimedia[0].caption}
          </Figure.Caption>
        </Figure>
      </ShouldRender>
      <hr />
      <span>{location.state.abstract}</span>
      <br />
      <br />
      <a target="_blank" href={location.state.short_url} rel="noreferrer">
        <Button variant="primary" className="mb-10">
          Go to the article
        </Button>
      </a>
    </div>
  );
};

export default Story;
