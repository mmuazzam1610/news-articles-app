import { Dispatch, FC, SetStateAction, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import cx from "classnames";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppSelector } from "../../../redux/hooks";
import "./searchinput.css";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
  onSearch: () => void;
}

export const SearchInput: FC<Props> = ({ setQuery, query, onSearch }) => {
  const [hideHistory, setHideHistory] = useState(true);
  const history = useAppSelector((state) => state.search.history);

  const onChange = (e: any) => {
    setQuery(e.target.value);
  };

  const onFocus = () => {
    setHideHistory(false);
  };

  const onClickHistory = (val: string) => {
    setQuery(val);
  };

  const onBlur = () => {
    setHideHistory(true);
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={query}
        />
        <Button variant="dark" onClick={onSearch}>
          Search
        </Button>
      </Form>
      <div className={cx("history", { hide: hideHistory })}>
        <ListGroup>
          {history.map((el, index) => (
            <ListGroup.Item
              action
              key={index}
              onClick={() => onClickHistory(el)}
            >
              <img src="/history.png" alt="history" /> {el}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
