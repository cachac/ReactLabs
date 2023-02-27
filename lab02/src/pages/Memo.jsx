import React from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  console.log("Render: App");

  const [users, setUsers] = React.useState([
    { id: "a", name: "Carlos" },
    { id: "b", name: "Mónica" },
  ]);

  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers([{ id: uuidv4(), name: text }, ...users]);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} />
    </div>
  );
};

const List = ({ list }) => {
  console.log("Render: List");

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  console.log("Render: ListItem");

  return <li>{item.name}</li>;
};

export default App;
