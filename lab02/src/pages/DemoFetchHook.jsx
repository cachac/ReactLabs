import React, { Fragment, useState, useEffect } from "react";
import { useFetch } from "../hooks/Fetch";

function App() {
  const [query, setQuery] = useState("react");
  const [data, isLoading, isError, setUrl] = useFetch(
    "https://hn.algolia.com/api/v1/search?query=react",
    { hits: [] }
  );


  return (
    <Fragment>
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
        <ul>
          {data.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default App;
