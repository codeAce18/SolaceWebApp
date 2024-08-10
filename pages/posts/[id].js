// pages/posts/[id].js
import { useRouter } from 'next/router';

// Mock data fetching function
const fetchPostData = async (id) => {
  // Replace with your data fetching logic
  return { id, title: `Post ${id}`, content: `Content for post ${id}` };
};

// This function gets called at build time
export async function getStaticPaths() {
  // You can fetch a list of IDs from an API or database
  const posts = [{ id: '1' }, { id: '2' }]; // Example data

  // Create paths with `id` parameter
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Set to true or 'blocking' if you want incremental static regeneration
  };
}

// This function gets called at build time with the `id` parameter
export async function getStaticProps(context) {
  const { id } = context.params;

  // Fetch data for the post
  const postData = await fetchPostData(id);

  return {
    props: {
      post: postData,
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  // Render loading state if page is being built
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

