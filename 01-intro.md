# 1. Lab 01: Intro

Get Started!!
# 2. Instalar Node JS + NVM (bash)
```vim
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

nvm -v
```

## 2.1. Instalar Node JS 14 (LTS)
> nvm install <VERSION>

```vim
nvm install 14
nvm install 16

node -v
npm -v

nvm use 14
```

## 2.2. Cambiar de versión Node

> nvm use <VERSION>
```vim
nvm use 14
```

# 3. React app
```vim
npx create-react-app lab01

cd lab01
npm start
```

## 3.1. Explore
> package.json
> node_modules
> .gitignore
> src
> App.js
> App.css
> index.js

## 3.2. Editar App.js
Cambiar la siguiente línea por el nombre.
```html
<p>
	Edit <code>src/App.js</code> and save to reload.
</p>
```

> El browser se actualiza automáticamente.

# 4. React Components: Functional vs Class
## 4.1. Actualizar en index.js
> Eliminar <App />

## 4.2. Class Components
> [Class.jsx](./lab01/src/Class.jsx)

Editar index.js
```js
# named export
import { Counter } from "./Class";

...
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
...
```

## 4.3. Functional Components
> [Functional.jsx](./lab01/src/Functional.jsx)

Editar index.js
```js
// import { Counter } from "./Class";

# export default
import  Counter  from "./Functional";

...
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
...
```

# 5. Lifecycle Methods
> [Detecting side effects](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)

## 5.1. Class
> [Mount.jsx](./lab01/src/Mount.jsx)

## 5.2. Functional
> [Hooks.jsx](./lab01/src/Hooks.jsx)
> [Rules](https://reactjs.org/docs/hooks-rules.html)
> [Strict Mode](https://reactjs.org/docs/strict-mode.html)
```js

```

# 6. Props
Pasar valores desde un componente padre al hijo

> [ClassProp.jsx](./lab01/src/ClassProp.jsx)

> [HooksProp.jsx](./lab01/src/HooksProp.jsx)

## 6.1. Lab:
### 6.1.1. Cambiar el titulo del botón en hooks
### 6.1.2. Destructurar props en el Hook
### 6.1.3. Destructurar useState en el import React from "react"
### 6.1.4. Crear un boton para decrementar el contador. Modo Hook
### 6.1.5. Evitar que el contador disminuya de 0
### 6.1.6. Agregar los estilos de App.css
### 6.1.7. Usar los estilos "App", "App-header" y aplicar classNames
> Ver  ejemplo en App.js
### 6.1.8. Agregar el siguiente css a App.css y agregar la clase button a los botones.
```css
.button {
	background-color: #4c84af;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
```
# 7. Sub Components
> [Subcomponents.jsx](./lab01/src/Subcomponents.jsx)

> [components/title.jsx](lab01/components/title.jsx)

## 7.1. Lab:
### 7.1.1. Crear el componente buttons.jsx
Pasarle los props "buttonTitle"
> Es necesario utilizar **Callback functions** para su funcionamiento (siguiente punto).

# 8. Component Callback Function
> [CallbackFx.jsx](./lab01/src/CallbackFx.jsx)

## Sibling Component: children

### Instalar paquetes npm fontawesome
```vim
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

### Usar en el proyecto
```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

...
<Buttons count={count} onHandleChange={handleChange}>
	<FontAwesomeIcon icon={faBolt} />
</Buttons>
...
```
# 9. Conditional Rendering
> [Conditional](./lab01/src/ConditionalRender.jsx)

- Ternary Operator
```js
const demoValue = 5
const result = demoValue < 5 ? 'el valor es menor a 5' : 'El valor es igual o mayor a 5'
console.log('result :>> ', result);
```
- Optional && Operator
```js
const demoValue = 5;
const result = demoValue > 5 && "el valor es mayor a 5";
console.log("result", result); // false
```
## Lab:
Ocultar el boton de disminuir cuando el contador es igual a 0.

# LocalStorage: Best Practice useEffect Hook
> [Guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

# Custom Hook
> [Custom Hook](./lab01/src/CustomHook.jsx)

# PropTypes
> [Info](https://github.com/facebook/prop-types)
> [PropTypes](./lab01/src/PropTypes.jsx)

```vim
npm install --save prop-types
```
```js
import PropTypes from 'prop-types';
```

## Lab:
Crear PropTypes para el componente Buttons en las propiedades count y onHandleChange

# Lab: State Lifting
Estados comunes (useCount) manejados por el componente padre

## Pasar el valor de useCount al componente Input
```javascript
<Input num={useCount} />
```
## El componente Input debe retornar el valor del <input>, para modificar useCount

# Lists and keys
Cuando suma o resta, debe cargar un arreglo con los valores y mostrarlos en pantalla.
> [List.jsx](./lab01/src/List.jsx)

# Router
```vim
npm install react-router-dom
```
```css
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #77a8ce;
}

li {
	float: left;
}

li a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

li a:hover {
	background-color: #111;
}
```
> [router.js](./lab01/src/router.js)

> [ListRouter.jsx](./lab01/src/ListRouter.jsx)

> [Menu.jsx](./lab01/src/Menu.jsx)

> [index-router](./lab01/src/index-router.js)

> Nota: al navegar entre páginas, los estados que no son persistentes se reincian a su valor original, ver el arreglo de números.
# Context
Compartir estados globales (datos) entre componentes sin necesidad de atravezar todos los subcomponentes
> [index.js](./lab01/src/index-context.js)

> [ListContext.jsx](./lab01/src/ListContext.jsx)

## Lab:
Agregar el id y name al menu principal.
> [index.js](./lab01/src/index-async-context.js)

