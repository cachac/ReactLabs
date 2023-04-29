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

- main.jsx
```js
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



# 13. useCallback (Funciones, componentes)
> [UseCalback](./lab02/pages/../src/pages/UseCallback.jsx)

- Causa re-render en todos los componentes con cada input.

## 13.1. Aplicar memo (lab anterior)
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
- Continua el re-render de los componentes, debido al onRemove callback

## 13.2. Aplicar el useCallback
> [callback](https://kentcdodds.com/blog/usememo-and-usecallback)

```js
 const handleRemove = useCallback(
    (id) => setUsers(users.filter((user) => user.id !== id)),
    [users]
  );
```
- El input no causa re-render
- El botón remove causa re-render



# 14. fetch data
> [fetching-class](https://www.robinwieruch.de/react-fetching-data/)
> [fetching-hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)

- Basic Fetch
> [Demo fetch](./lab02/src/pages/DemoFetch.jsx)

- Error handler + loader
> [Demo fetch](./lab02/src/pages/DemoFetch2.jsx)

## 14.1. Custom React Hook: useFetch
> [Custom Fetching](https://www.freecodecamp.org/news/fetch-data-react/)

> [Fetch Hook](./lab02/src/hooks/Fetch.jsx)
> [Demo fetch](./lab02/src/pages/DemoFetchHook.jsx)

## 14.2. Lab. Get Blog Posts en la página /Home (api)
# 15. Tables
> [React Table](https://react-table-v7.tanstack.com/docs/quick-start#applying-the-table-instance-to-markup)
```vim
 npm i styled-components
 npm i react-table
 npm i @fortawesome/fontawesome-free
```
## 15.1. Simple
> [Simple Data Table](./lab02/src/pages/DemoTable.jsx)

## 15.2. Columns and Search
> [Search Data Table](./lab02/src/pages/DemoTableSearch.jsx)
## 15.3. Data Table Component
> [Demo Component](./lab02/src/pages/DemoTableComponent.jsx)
> [Data Table Component](./lab02/src/components/dataTable.jsx)

## 15.4. Lab. Cargar Blog Post en la tabla en la página /Admin
## 15.5. Dynamic routes xxx/:yyy
### 15.5.1. Add useNavigate
```js
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();
```

### 15.5.2. Add rowClick Prop
```js
<DataTable
	columns={columns}
	data={filteredData}
	/* ROW click PROP */
	rowClick={(id) => navigate(`/item/id:${id}`)}
></DataTable>
```

- main.js, agregar ruta "item"
```js
  import ItemDemo from "./pages/ItemDemo";

  <Route path="item/:id" element={<ItemDemo />} />
```

> [Dynamic Route](./lab02/src/pages/ItemDemo.jsx)

## 15.6. Lab. Abrir un Blog Post

# 16. Fetch avanzado
## 16.1. Session headers
> [Fetch](./lab02/src/hooks/Fetch-headers.jsx)
> [Home](./lab02/src/pages/HomePost1.jsx)
### 16.1.1. Check line 20 & 22:
```js
...(session?.token && { Authorization: `Bearer ${session.token}` }),

...(method === "POST" && {
			body: JSON.stringify({
				_id: query,
			}),
```


Use: Home.jsx ej.
```js
import { useFetch } from "../hooks/Fetch";
...
const { data, isLoading, isError, runFetch } = useFetch();
...
useEffect(() => {
	runFetch({ url: `http://localhost:3001/post/readAll`, method: "GET" });
}, []);
```
# 17. Axios Hook
> [Axios Hook](./lab02/src/hooks/Axios.jsx)
Use:
```js
import useAxios from '../hooks/Axios';
const { data, isLoading, isError, runAxios } = useAxios();
useEffect(() => {
	runAxios('/post/readAll'); // ,GET: default method | "POST"
}, []);
```

# 18. State management
## 18.1. Redux Toolkit
> [info](https://redux-toolkit.js.org/)
> [redux old](https://dev.to/chrisachard/redux-crash-course-with-hooks-a54)
```
npm install @reduxjs/toolkit react-redux
```
## 18.2. Home form demo
Llenar el campo nombre y navegar entre las páginas del proyecto.

> La variable "name" no persiste su estado.
> La variable "name" no se puede utilizar fuera de home.jsx
```js
import Form from "react-bootstrap/Form";
export default function Page() {
	const [name, setName] = useState("");
	return (
		 <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
      </Form>
	)
}

```
## 18.3. src/store folder
> [redux slice](./lab02/src/store/formSlice.js)

## 18.4. redux index
> [redux index](./lab02/src/store/redux-index.js)

## 18.5. redux Provider
main.js
```js
import { store } from "./store/redux-index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
		...
		</Provider>
		...
```

## 18.6. Fix Home form state
```js
import { setName } from "../store/formSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
	const { name } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  ...
	<Form.Control
		...
		onChange={(e) => dispatch(setName(e.target.value))}
	/>
```

## 18.7. Lab. Agregar al Store la variable apellidos y crear el Input en el Form.

## 18.8. Post State & Async Fetch
```
npm install nprogress
```
### 18.8.1. service/ApiClient (Axios)
> [axios service](./lab02/src/service/apiClient.js)

### 18.8.2. post asyn thunk
> [postSlice](./lab02/src/store/postSlice.js)

> agregar postSlice a redux-index

### 18.8.3. Home: agregar el postSlice
```js
import { readAll } from "../store/postSlice";
...
  const {
    isLoading,
    isError,
    errorMessage,
    list: data,
  } = useSelector((state) => state.post);

  // const { data, isLoading, isError, runFetch } = useFetch();

	useEffect(() => {
	// runFetch({ url: `http://localhost:3001/post/readAll`, method: "GET" });
	dispatch(readAll());

	...
	{isError && <div>{errorMessage}</div>}
}, []);
```

### 18.8.4. Opcional, cargar la lista del store (cache)
```js
const {list} = thunkAPI.getState().post;
if (list.length) {
	console.log("get list from cache ⏩");

	return list;
}
```
## 18.9. Lab. En home, crear un botón para recargar la lista (refresh)

## 18.10. Zustand
```
npm install zustand
```
> [post](./lab02/src/store/zu-post.js)
 ### 18.10.1. Home zustand
```js
import { postStore } from "../store/zu-post";
...
const { list: data, isLoading, getList } = postStore();
...
useEffect(() => {
	// runFetch({ url: `http://localhost:3001/post/readAll`, method: "GET" });
	// dispatch(readAll());
	getList()
}, []);

```

# 19. Lab, open a post (Admin page)
