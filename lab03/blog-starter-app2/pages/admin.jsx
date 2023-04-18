import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { useEffect, useState, useMemo } from "react";
import { useAuth } from "../context/Session";
import DataTable from "../components/dataTable";
import Alert from "../components/loginAlert";
import { useRouter } from "next/router";
import { postStore } from "../store/post";

export default function Login() {
  // const navigate = useNavigate();
  const router = useRouter();
  const { session } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  // const { data, isLoading, isError, runFetch } = useFetch();
  const [datafiltered, setDataFiltered] = useState([]);
  const { list: data, isLoading, getList } = postStore();

  const rowClick = (row) => {
    router.push(`/posts/${row}`);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Post",
        columns: [
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Author",
            accessor: "author",
          },
          {
            Header: "Created At",
            accessor: "createdAt",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (searchValue.length >= 3) {
      return setDataFiltered(
        data.filter((i) => i.title.toLowerCase() === searchValue.toLowerCase())
      );
    }
    setDataFiltered(data);
  }, [searchValue, data]);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Admin Dashboard`}</title>
        </Head>
        <Container>
          <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ">
            <div className="w-full">
              <h1 className="text-3xl font-semibold text-center underline">
                Admin Dashboard
              </h1>

              {session?.state ? (
                <>
                  <input
                    type="text"
                    id="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  ></input>
                  <DataTable
                    columns={columns}
                    data={datafiltered}
                    rowClick={rowClick}
                  />
                </>
              ) : (
                <Alert />
              )}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
