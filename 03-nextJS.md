
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

# 3. Lab: typescrypt
> [learn](https://learn.microsoft.com/en-us/training/modules/typescript-get-started/)
# 4. Clean project
```
npm install zustand axios nprogress react-hot-toast jwt-decode react-table styled-components @fortawesome/fontawesome-free
```
## 4.1. _app.tsx
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
## 4.2. Create context/Session.jsx file
> [Session](./lab03/blog-starter-app/context/Session.jsx)
## 4.3. interfaces/post
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
## 4.4. index.tsx
- <title> tag
- <components>/<intro> tag
- useEffect Hook (api call)
- - add store
- - api call (readAll posts)

## 4.5. HeroPost.tsx
## 4.6. DateFormater.tsx
## 4.7. MoreStories
## 4.8. PostPreview
## 4.9. Slug (_id)
- post interface: _id
## 4.10. HeroPost: _id
## 4.11. MoreStories: _id
## 4.12. post/[_id].tsx
```js
 const { post, isLoading, getPost } = postStore();
	useEffect(() => {
		getPost(router.query._id);
	}, [router.query._id]);
```
### 4.12.1. PostHeader

# 5. Login
## 5.1. alert.tsx (login banner)
## 5.2. Lab: login page
> [forms](https://github.com/tailwindlabs/tailwindcss-forms)
```
npm install -D @tailwindcss/forms
```
- tailwind.config.js
```js
plugins: [require("@tailwindcss/forms")],
```

# 6. Lab: Admin dashboard

# 7. apiClient ENV Vars
# 8. SSR vs SSG

# 9. export static files


# 10. Deploy Vercel

# 11. Práctica Blog-Post (CRUD)
## 11.1. Create post
## 11.2. Read post
## 11.3. Update post
## 11.4. Delete post
# 12. Admin Page: Infinity scroll

