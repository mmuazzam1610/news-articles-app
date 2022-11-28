import { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { buildSearchURL } from "../../utils";
import { SearchResults } from "../../components/search/SearchResults";
import { ShouldRender } from "../../components/shared/ShouldRender";
import "./search.css";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onChangeInput = (e: any) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    axios.get(buildSearchURL(query)).then((res) => {
      setResults(res.data.response.docs);
      console.log(res.data.response);
      setCurrentPage(0);
      let totalPages = Math.floor(res.data.response.meta.hits / 10);
      totalPages > 200 ? setTotalPages(200) : setTotalPages(totalPages);
    });
  };

  const onPageSelect = (page: string) => {
    let nextPage =
      page === "next"
        ? currentPage + 1
        : page === "prev"
        ? currentPage - 1
        : page === "last"
        ? totalPages
        : 0;
    axios.get(buildSearchURL(query, nextPage)).then((res) => {
      setResults(res.data.response.docs);
      console.log(res.data.response);
      setCurrentPage(nextPage);
    });
  };

  return (
    <div className="container">
      <h2>Search for articles</h2>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={onChangeInput}
          value={query}
        />
        <Button variant="dark" onClick={onSearch}>
          Search
        </Button>
      </Form>
      <SearchResults results={results} />
      <ShouldRender check={results.length > 0}>
        <div className="center">
          <Pagination size="lg">
            <Pagination.First onClick={() => onPageSelect("first")} />
            <Pagination.Prev onClick={() => onPageSelect("prev")} />
            <Pagination.Item active>{currentPage + 1}</Pagination.Item>
            <Pagination.Next onClick={() => onPageSelect("next")} />
            <Pagination.Last onClick={() => onPageSelect("last")} />
          </Pagination>
        </div>
      </ShouldRender>
    </div>
  );
};

export default Search;
