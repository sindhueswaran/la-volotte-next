import MoreStories from "../../components/posts/more-stories";
import PostPreview from "../../components/posts/post-preview";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Posts({ allPosts }) {
  // const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
    <Head>
        <title>La Volotte</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head> 
      <MoreStories posts={morePosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
