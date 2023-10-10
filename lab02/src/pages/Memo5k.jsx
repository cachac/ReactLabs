import React, { memo, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  console.log("RENDER: APP");
  let userArray = [];
  const [users, setUsers] = React.useState([]);

  const [text, setText] = React.useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    for (let i = 1; i <= 5000; i++) {
      userArray = [{ i, name: `User Number ${i}` }, ...userArray];
    }

    setUsers(userArray);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers([{ id: uuidv4(), name: text }, ...users]);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      {/* LIST */}
      <List list={users} />
    </div>
  );
};

const ListItem = ({ item }) => {
  console.log("RENDER: LIST-ITEM");

  return <li> {item.name} </li>;
};

// const List = ({ list }) => {
//   console.log("RENDER: LIST");

//   return (
//     <ul>
//       {list.map((item) => (
//         <ListItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };

const List = memo(({ list }) => {
  console.log("RENDER: LIST");

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

export default App;
