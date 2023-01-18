import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "./Session";

const Menu = () => {
  const { name, id } = useContext(SessionContext);

  return (
    <>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/contador`}>Contador</Link>
        </li>
      </ul>

      {/* session */}
      <p>
        Sesion: {name}--{id}
      </p>
    </>
  );
};
export default Menu;
