
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
.env.local
```
NEXT_PUBLIC_ENV=dev
NEXT_PUBLIC_API_URL=http://20.228.195.178:3001

```
apiClient
```
baseURL: process.env.NEXT_PUBLIC_API_URL,
```

## 7.1. env-cmd
```
npm i env-cmd
```

```
"builddev": "env-cmd -f .env.local next build",
```
```
npm run build
```
# 8. export static files
```
"builddev": "env-cmd -f .env.local next build && next export",
```
> check out directory

```
npm install -g http-server

http-server ./out
```
> check in browser

## 8.1. Lab: create a production build

# 9. SSR vs SSG
# 10. Deploy Vercel
- new account
- install Github account
- new project
- import github project
  - output settings
  - env variables
- deploy

# 11. Images
- github as a static files bucket
- database coverImage field
- api, get coverImage
- front, set .coverImage property
# 12. Práctica Blog-Post (CRUD)
## 12.1. Create post
## 12.2. Read post
## 12.3. Update post
## 12.4. Delete post
# 13. Admin Page: Infinity scroll

