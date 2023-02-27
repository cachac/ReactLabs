import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [users, setUsers] = useState([]);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const generateString = (length) => {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  useEffect(() => {
    const list = [];
    for (let index = 0; index < 10; index++) {
      list.push({ id: uuidv4(), name: generateString(5) });
    }
    setUsers(list);
    console.log("Initial render ✅");
  }, []);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = users.filter((user) => {
    console.log("Filter function is running ...");

    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
