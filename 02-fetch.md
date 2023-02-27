# LAB02 <!-- omit in toc -->

# 1. Vite
```vim
npm create vite@latest lab02 -- --template react

cd lab02
npm i
npm install react-router-dom@6
npm install react-bootstrap bootstrap
npm install react-router-bootstrap
npm install react-hot-toast
npm run dev
```

## 1.1. Editar vite.confg
```js
  server: { port: 8080 }
```

# 2. Eliminar los archivos  App.jsx, index.css, App.css
# 3. Crear los directorios
- pages
- layout
- components
- context


# 4. Crear en pages/
## 4.1. Home.jsx
```js
export default function Home() {
  return <div>Home</div>;
}
```
## 4.2. Login.jsx
```js
export default function Login() {
  return <div>Login</div>;
}
```
## 4.3. Admin.jsx
```js
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();
  return (
    <Card className="m-auto" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title> No autorizado 🤖</Card.Title>
        <Card.Text> Debe registrar para acceder a esta página</Card.Text>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Card.Body>
    </Card>
  );
}

```

# 5. Crear layout/Layout.jsx
> [Simple layout](https://www.js-tutorials.com/react-js/simple-theming-layout-in-reactjs-using-bootstrap/)
```js
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="/src/assets/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React logo"
            />
          </Navbar.Brand>

          <Nav className="me-auto justify-content-center">
            {/* <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link> */}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
};

```

# 6. Editar main.jsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Error!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);

```
# 7. Context Session
>  [Async UseEffect](https://devtrium.com/posts/async-functions-useeffect)
> [Auth](https://usehooks.com/useAuth/)
# 8. Crear context/Session.jsx
> [Session](./lab02/src/context/Session.jsx)

# 9. Agregar El "Provider" en main.jsx
```js
import { ProvideAuth } from "./context/Session";

 <ProvideAuth>
	 <BrowserRouter>
    ...
   </BrowserRouter>
 </ProvideAuth>
```

# 10. Utilizar useAuth Context en Admin.jsx
> [Admin Session](./lab02/src/pages/AdminSessionContext.jsx)


# 11. Login Form
> [Grid System](https://getbootstrap.com/docs/4.0/layout/grid/)
> [Forms](./lab02/src/pages/LoginForm.jsx)

## 11.1. Validation
> [Forms Validation](https://react-bootstrap.github.io/forms/validation/)
> [Login Validate](./lab02/src/pages/LoginFormValidate.jsx)

## 11.2. Fetch (context)
> [Login Fetch](./lab02/src/pages/LoginFetch.jsx)
> [Session Fetch](./lab02/src/context/SessionFetch.jsx)
> [Toast](https://react-hot-toast.com/)

```main.jsx
import { Toaster } from "react-hot-toast";

  <Toaster
		position="top-center"
		toastOptions={{ className: "react-hot-toast" }}
	/>
```

## 11.3. Lab: Crear un componente de Registro.
- Solicita Nombre, email, password y comprobación.
- Botón de volver a login
> [Login-Register](./lab02/src/components/register02.jsx)

# 12. Hooks avanzados
## 12.1. React Memo (Componentes)
> [Memo](./lab02/src/Memo.jsx)

- Validar console.log
- El componente se re-renderiza con cada input de teclado.
- Componente App se actualiza y obliga a sus componentes hijos a actualizar.
- Utilizar React memo cuando el re-render sea muy lento

```js
const List = memo(({ list }) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

const ListItem = ({ item }) => {
  console.log('Render: ListItem');
  return <li>{item.name}</li>;
};
```
- Solo el componente app es actualizado
- Los componentes hijos son "Memorizados" y no hacen re-render.
- La lista hace una comparación de su estado actual vs el nuevo estado, si son iguales no hace re-render.
- Cuando agrega un nuevo item causa el re-render de todos los componentes afectados.
- El costo de la comparación del React memo suele ser mayor al comportamiento por defecto (re-render)



## 12.2. UseMemo (Funciones y valores de retorno)
> [useMemo](./lab02/pages/../src/pages/UseMemo.jsx)

- Validar console.log
- La función de filtro causa re-render (10x)

### 12.2.1. Opcional. Crear una función para crear un array de strings de 1000 elementos
- Validar el re-render (1000x)
- La aplicación se comporta lenta

### 12.2.2. usar useMemo
```js
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );
```
- La función se ejecuta solo cuando "search" es actualizado.
- No se ejecuta con el cambio del input



# 14. useCallback (Funciones, componentes)
> [UseCalback](./lab02/pages/../src/pages/UseCallback.jsx)

- Causa re-render en todos los componentes con cada input.

## Aplicar memo (lab anterior)
```js
const List = memo(({ list, onRemove }) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = memo(({ item, onRemove }) => {
  console.log('Render: ListItem');
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});
```


# 13. cuando usar usememo - usecallback
https://kentcdodds.com/blog/usememo-and-usecallback

# 15. fetch data
https://www.robinwieruch.de/react-hooks-fetch-data/
https://www.robinwieruch.de/react-fetching-data/
https://www.freecodecamp.org/news/fetch-data-react/
https://polvara.me/posts/fetching-asynchronous-data-with-react-hooks

# 16. eslint rules
https://blog.logrocket.com/12-essential-eslint-rules-react/






# 17. tables
## 17.1. dynamic routes xxx/:yyy

# 18. State management
## 18.1. Redux Toolkit
## 18.2. Zustand
# 19. API Call avanzado
## 19.1. Axios

# 20. NextJS
# 21. Práctica Blog-Post
