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

export default function Page() {
  return (
    <Card className="m-auto" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>No Autorizado 👾</Card.Title>
        <Card.Text>Debe registrar se para acceder a esta página.</Card.Text>
        <Button variant="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Card.Body>
    </Card>
  );
}

```

# 5. Crear layout/Layout.jsx
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


# Login Form
> [Grid System](https://getbootstrap.com/docs/4.0/layout/grid/)
> [Forms](./lab02/src/pages/LoginForm.jsx)

## Validation
> [Forms Validation](https://react-bootstrap.github.io/forms/validation/)
> [Login Validate](./lab02/src/pages/LoginFormValidate.jsx)

## Fetch (context)
>[](./lab02/src/context/SessionFetch.jsx)


## Lab: Crear un componente de Registro.
- Solicita Nombre, email, password y comprobación.
- Botón de volver a login
> [Login-Register](./lab02/src/pages/LoginRegister.jsx)




# 11. fetch data
https://www.robinwieruch.de/react-hooks-fetch-data/
https://www.robinwieruch.de/react-fetching-data/
https://www.freecodecamp.org/news/fetch-data-react/
https://polvara.me/posts/fetching-asynchronous-data-with-react-hooks
# 12. Forms
## 12.1. Validation

# 13. Computed properties usememo
https://www.robinwieruch.de/react-usememo-hook/

# 14. usecallback
https://www.robinwieruch.de/react-usecallback-hook/


# 15. eslint rules
https://blog.logrocket.com/12-essential-eslint-rules-react/


## 15.1. dynamic routes xxx/:yyy


layout
https://www.js-tutorials.com/react-js/simple-theming-layout-in-reactjs-using-bootstrap/


# 16. cuando usar usememo - usecallback
https://kentcdodds.com/blog/usememo-and-usecallback

# 17. tables

# 18. State management
## 18.1. Redux Toolkit
## 18.2. Zustand
# NextJS
# 19. Práctica Blog-Post