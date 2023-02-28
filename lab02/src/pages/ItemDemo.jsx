import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams();
  // TODO: load data from source

  return <div>ITEM: {id}</div>;
}
