import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
// import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from "../../components/post-title";
import Head from "next/head";
// import { CMS_NAME } from '../../lib/constants'
// import markdownToHtml from '../../lib/markdownToHtml'
// import type PostType from "../../interfaces/post";

import { postStore } from "../../store/post";
import { useEffect, useState } from "react";

// type Props = {
//   post: PostType;
//   morePosts: PostType[];
//   preview?: boolean;
// };

export default function Post(/*{ post, morePosts, preview }: Props*/) {
  const router = useRouter();
  // const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  const { post, getPost } = postStore();
  const [initPost, setInitPost] = useState(true);

  useEffect(() => {
		if (router.query._id)
			console.log('router.query._id', router.query._id)
      getPost(router.query._id).finally(() => {
        console.log("fin");
        setInitPost(false);
      });
  }, [router.query._id]);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  // if (!router.isFallback && !post?._id) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout preview={false}>
      <Container>
        <Header />
        {initPost ? (
          <PostTitle>Loading…</PostTitle>
        ) : !initPost && !post._id ? (
          <PostTitle>Post not found 😞</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.img} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                createdAt={post.createdAt}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

// type Params = {
//   params: {
//     slug: string
//   }
// }

// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'date',
//     'slug',
//     'author',
//     'content',
//     'img',
//     'coverImage',
//   ])
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }

// static sites = paths must be created dinamically at build-time
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug'])

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }
