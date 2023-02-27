import React from "react";
import { v4 as uuidv4 } from "uuid";

const initialValues = [
  { id: "a", name: "Carlos" },
  { id: "b", name: "Monica" },
  { id: "c", name: "Marie" },
  { id: "d", name: "Walter" },
  { id: "e", name: "Jorge" },
  { id: "f", name: "Hazel" },
  { id: "g", name: "Olga" },
  { id: "h", name: "Ignacio" },
  { id: "i", name: "Fabian" },
  { id: "j", name: "Priscilla" },
];

const App = () => {
  console.log("Render: App");

  const [users, setUsers] = React.useState(initialValues);

  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

const List = ({ list, onRemove }) => {
  console.log("Render: List");

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, onRemove }) => {
  console.log("Render: ListItem");

  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default App;
