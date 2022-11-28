import { FC } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "./homelinks.css";
import { useNavigate } from "react-router-dom";

export const HomeLinks: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack gap={3} className="links">
      <Button variant="dark" size="lg" onClick={() => navigate("/search")}>
        Search
      </Button>
      <Button
        variant="dark"
        size="lg"
        onClick={() => navigate("/stories/world")}
      >
        World
      </Button>
      <Button
        variant="dark"
        size="lg"
        onClick={() => navigate("/stories/science")}
      >
        Science
      </Button>
    </Stack>
  );
};
