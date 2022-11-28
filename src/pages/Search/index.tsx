import { FC, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { buildSearchURL } from "../../utils";
import { SearchResults } from "../../components/search/SearchResults";
import { ShouldRender } from "../../components/shared/ShouldRender";
import "./search.css";
import { AppLayout } from "../../components/shared/AppLayout";
import { useAppDispatch } from "../../redux/hooks";
import { SearchInput } from "../../components/search/SearchInput";
import { search } from "../../redux/search/searchSlice";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useAppDispatch();

  const onSearch = () => {
    axios.get(buildSearchURL(query)).then((res) => {
      dispatch(search(query));
      setResults(res.data.response.docs);
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
      setCurrentPage(nextPage);
    });
  };

  return (
    <AppLayout>
      <h2>Search for articles</h2>
      <SearchInput query={query} setQuery={setQuery} onSearch={onSearch} />
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
    </AppLayout>
  );
};

export default Search;
