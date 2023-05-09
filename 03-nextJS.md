
# 1. NextJS + TypeScript
- Performance - Hidrate
- SEO
- Static sites

> [templates](https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app)
> [more](https://www.tailwindawesome.com/?price=free&technology=7&type=template)
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
- interfaces (posts.ts)
- public.assets
- styles
- components
- lib (api.ts)
- _posts (.md)

# Lab: typescrypt
> [learn](https://learn.microsoft.com/en-us/training/modules/typescript-get-started/)
# 3. Clean project
```
npm install zustand axios nprogress react-hot-toast jwt-decode react-table styled-components @fortawesome/fontawesome-free
```
## 3.1. _app.tsx
- toaster provider
- session context
```js
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ className: "react-hot-toast" }}
      />
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </>
  );
```
## Create context/Session.jsx file
> [Session](./lab03/blog-starter-app/context/Session.jsx)
## 3.2. interfaces/post
```js
type PostType = {
	_id: string
  slug?: string
  title: string
  createdAt: string
  coverImage?: string
  author: string
  excerpt?: string
  img?: string
  body: string
}
```
## 3.3. index.tsx
- <title> tag
- <components>/<intro> tag
- useEffect Hook (api call)
- - add store
- - api call (readAll posts)

## 3.4. HeroPost.tsx
## 3.5. DateFormater.tsx
## 3.6. MoreStories
## 3.7. PostPreview
## 3.8. Slug (_id)
- post interface: _id
## 3.9. HeroPost: _id
## 3.10. MoreStories: _id
## 3.11. post/[_id].tsx
```js
 const { post, isLoading, getPost } = postStore();
	useEffect(() => {
		getPost(router.query._id);
	}, [router.query._id]);
```
### 3.11.1. PostHeader

# 4. Login
## 4.1. alert.tsx (login banner)
## 4.2. Lab: login page
> [forms](https://github.com/tailwindlabs/tailwindcss-forms)
```
npm install -D @tailwindcss/forms
```
- tailwind.config.js
```js
plugins: [require("@tailwindcss/forms")],
```

# 5. apiClient ENV Vars
# 6. SSR vs SSG
# 7. Lab: Admin dashboard



# 8. export static files


# 9. Deploy Vercel

# 10. Práctica Blog-Post (CRUD)
## 10.1. Create post
## 10.2. Read post
## 10.3. Update post
## 10.4. Delete post
# 11. Admin Page: Infinity scroll

