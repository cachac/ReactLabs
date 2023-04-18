import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
// import { getAllPosts } from '../lib/api'
import Head from "next/head";
// import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import { postStore } from "../store/post";
import { useEffect, useState } from "react";

// type Props = {
//   allPosts: Post[]
// }

const initPost: Post = {
	_id: "",
  title: "",
  createdAt: "",
  slug: "",
  coverImage: "",
  author: "",
  excerpt: "",
  content: "",
  img: "",
};

export default function Index(/*{ allPosts }*/) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const { list, isLoading, getList } = postStore();
  const [heroPost, setHeroPost] = useState<Post>(initPost);
  const [morePosts, setMorePosts] = useState<Post[]>([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (list.length) {
			setHeroPost(list[0]);
			setMorePosts(list.slice(1));
    }
  }, [list]);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog APP`}</title>
        </Head>
        <Container>
          <Intro />

          {isLoading && (
            <div className="w-full mb-4">
              <div className="animate-pulse flex">
                <div className="flex-1">
                  <div className="h-1 bg-green-600"></div>
                </div>
              </div>
            </div>
          )}
          {heroPost.title && (
						<HeroPost
							_id={heroPost._id}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              createdAt={heroPost.createdAt}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
