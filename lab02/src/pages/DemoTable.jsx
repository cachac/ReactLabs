import React, { useState, useMemo } from "react";
import { useFetch } from "../hooks/Fetch";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Styles = styled.div`
  padding: 1rem;

  table {
    thead {
      background-color: #7c9eae70;
    }

    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }

      cursor: pointer;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #00000017;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

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
        Header: "TITLE",
        accessor: "title",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
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
        // <ul>
        //   {data.map((item) => (
        //     <li key={item.objectID}>
        //       <a href={item.url}>{item.title}</a>
        //     </li>
        //   ))}
        // </ul>

        <Styles>
          <table {...getTableProps}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-arrow-up ml-1" />
                          ) : (
                            <i className="fa fa-arrow-down ml-1" />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => sendRowClick(row.original._id)}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Styles>
      )}
    </>
  );
}

export default App;
