import React, { useState, useMemo } from "react";
import { useFetch } from "../hooks/Fetch";
import Card from "react-bootstrap/Card";
import DataTable from "../components/dataTable";

function App() {
  const [query, setQuery] = useState("react");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, isLoading, isError, setUrl] = useFetch(
    "https://hn.algolia.com/api/v1/search?query=react",
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "objectID",
      },
      {
        Header: "TITLE",
        accessor: "title",
      },
      {
        Header: "AUTHOR",
        accessor: "author",
      },
      {
        Header: "POINTS",
        accessor: "points",
      },
    ],
    []
  );

  const filteredData = useMemo(
    () =>
      data.filter((val) => {
        if (searchTerm === "") return val;
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
      }),
    [data, searchTerm]
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Card className="m-auto mt-3 p-3">
          <input
            id="search"
            placeholder="Search"
            name="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <DataTable
            columns={columns}
            data={filteredData}
          ></DataTable>
        </Card>
      )}
    </>
  );
}

export default App;
