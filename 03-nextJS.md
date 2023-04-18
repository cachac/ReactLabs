
# 1. NextJS + TypeScript
- Performance - Hidrate
- SEO
- Static sites

> [templates](https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app)
```
# template example
npx create-next-app --example blog-starter blog-app

# empty app
npx create-next-app blog-app
```
## 1.1. Run and test
```
npm run dev
```

# 2. Explorar
- pages: auto generated router
- _app.tsx (root page)
- _document (html padre)
- index.tsx (main)
```js
type Props = {
  allPosts: Post[]
}
```
```js
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
		...
```
> [build time - getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props#when-should-i-use-getstaticprops)

- public.assets
- styles
- components
- lib (api.ts)
- _posts (.md)


# 3. Clean project
## 3.1. index.tsx
- title
- components/intro
- getStaticProps (api call)

## 3.2. _app.tsx
### 3.2.1. session

## 3.3. alert.tsx
### 3.3.1. login banner

## 3.4. Deploy Vercel
# 4. eslint rules
https://blog.logrocket.com/12-essential-eslint-rules-react/
# 5. Práctica Blog-Post (CRUD)
## 5.1. Create post
## 5.2. Read post
## 5.3. Update post
## 5.4. Delete post
# 6. Admin Page: Infinity scroll
# 7. typescript
